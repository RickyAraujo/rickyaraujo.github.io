import * as babel from "@babel/core";
import { Node } from "@babel/traverse";
import {
  Expression,
  JSXElement,
  JSXEmptyExpression,
  JSXExpressionContainer,
  JSXFragment,
  JSXSpreadChild,
  JSXText,
  StringLiteral,
} from "@babel/types";

export interface PlasmicNodeBase {
  rawNode:
    | Expression
    | JSXEmptyExpression
    | JSXExpressionContainer
    | JSXSpreadChild
    | JSXFragment
    | JSXText;
}

export interface PlasmicOpaqueExpr extends PlasmicNodeBase {
  type: "opaque";
}

export interface PlasmicChildStringCall extends PlasmicNodeBase {
  type: "child-str-call";
  plasmicId: string;
  rawNode: Expression | JSXExpressionContainer;
}

// A quoted string expression {""}
export interface PlasmicStringLiteralExpr extends PlasmicNodeBase {
  type: "string-lit";
  // The value of the string, i.e. Abc for node {"Abc"}
  value: string;
  rawNode: StringLiteral | JSXExpressionContainer;
}

// A HTML text node.
export interface PlasmicJsxText extends PlasmicNodeBase {
  type: "text";
  // This is the effective value, which is trimmed.
  value: string;
  rawNode: JSXText;
}

// Plasmic can merge two expressions both are sound. An expression is sound if
// it is a fragment, or if it is a single sound PlasmicTagOrComponent.
export interface PlasmicJSXFragment extends PlasmicNodeBase {
  type: "jsx-fragment";
  children: PlasmicASTNode[];
  rawNode: JSXFragment;
}

export interface PlasmicJsxElement extends PlasmicNodeBase {
  nameInId: string;
  // A list of JSXAttribute or JSXSpreadAttribute. The value of a JSXAttribute
  // could be null (such as disabled in <div disabled/>).
  // For JSXSpreadAttribute, the value is a single PlasmicASTNode, which
  // represents the value of the spread argument.
  attrs: Array<[string, PlasmicASTNode | null] | PlasmicASTNode>;
  children: PlasmicASTNode[];
  rawNode: JSXElement;
  // The parent of rawNode.
  rawParent: Node | undefined;
}

// This is a blob of expression that returns a JSX element. Unlike
// PlasmicJsxElement, it may have chrome such as
// "rh.showButton() && <Button...>...</Button>"
//
// A PlasmicTagOrComponent can have multiple PlasmicJSXElement. In this case,
// the first one is the primary node, while the rest are secondary nodes.
// Secondary nodes are subject to these limtations during code merge
//  - if primary node was deleted, then all secondary nodes will also be deleted
//  - the secondary node's boundary is the immediately parent of the JSXElement
//    if the parent is an expression; otherwise, it is the JSXElement itself.
//    This is because we don't know the real boundary of the secondary node.
//    Lifting the preant up should cover the common case of
//    "rh.showXXX() && <tag...>"
export interface PlasmicTagOrComponent extends PlasmicNodeBase {
  type: "tag-or-component";
  jsxElement: PlasmicJsxElement;
  rawNode: Expression | JSXExpressionContainer;
  secondaryNodes: PlasmicTagOrComponent[];
}

export type PlasmicASTNode =
  | PlasmicTagOrComponent
  | PlasmicOpaqueExpr
  | PlasmicStringLiteralExpr
  | PlasmicJsxText
  | PlasmicChildStringCall
  | PlasmicJSXFragment;

export const makeCallExpression = (
  objectName: string,
  memberFuncName: string
) => {
  return babel.types.callExpression(
    babel.types.memberExpression(
      babel.types.identifier(objectName),
      babel.types.identifier(memberFuncName)
    ),
    []
  );
};

export const wrapInJsxExprContainer = (expr: Expression) => {
  return babel.types.jsxExpressionContainer(expr);
};
