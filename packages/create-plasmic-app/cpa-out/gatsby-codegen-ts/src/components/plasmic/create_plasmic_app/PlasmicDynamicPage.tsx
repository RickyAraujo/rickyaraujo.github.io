// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 47tFXWjN2C4NyHFGGpaYQ3
// Component: AO44A-w7hh

import * as React from "react";

import {
  Link,
  GatsbyLinkProps as LinkProps,
  navigate as __gatsbyNavigate
} from "gatsby";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import RandomDynamicPageButton from "../../RandomDynamicPageButton"; // plasmic-import: Q23H1_1M_P/component

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_create_plasmic_app.module.css"; // plasmic-import: 47tFXWjN2C4NyHFGGpaYQ3/projectcss
import * as sty from "./PlasmicDynamicPage.module.css"; // plasmic-import: AO44A-w7hh/css

export type PlasmicDynamicPage__VariantMembers = {};
export type PlasmicDynamicPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicDynamicPage__VariantsArgs;
export const PlasmicDynamicPage__VariantProps = new Array<VariantPropType>();

export type PlasmicDynamicPage__ArgsType = {};
type ArgPropType = keyof PlasmicDynamicPage__ArgsType;
export const PlasmicDynamicPage__ArgProps = new Array<ArgPropType>();

export type PlasmicDynamicPage__OverridesType = {
  root?: p.Flex<"div">;
  section?: p.Flex<"section">;
  h1?: p.Flex<"h1">;
  randomDynamicPageButton?: p.Flex<typeof RandomDynamicPageButton>;
};

export interface DefaultDynamicPageProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

export function Head() {
  return <></>;
}

function PlasmicDynamicPage__RenderFunc(props: {
  variants: PlasmicDynamicPage__VariantsArgs;
  args: PlasmicDynamicPage__ArgsType;
  overrides: PlasmicDynamicPage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <p.Stack
            as={"section"}
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            hasGap={true}
            className={classNames(projectcss.all, sty.section)}
          >
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              {(() => {
                try {
                  return $ctx.params.slug;
                } catch (e) {
                  if (e instanceof TypeError) {
                    return "Page 1";
                  }
                  throw e;
                }
              })()}
            </h1>

            <RandomDynamicPageButton
              data-plasmic-name={"randomDynamicPageButton"}
              data-plasmic-override={overrides.randomDynamicPageButton}
              className={classNames(
                "__wab_instance",
                sty.randomDynamicPageButton
              )}
            />
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "section", "h1", "randomDynamicPageButton"],
  section: ["section", "h1", "randomDynamicPageButton"],
  h1: ["h1"],
  randomDynamicPageButton: ["randomDynamicPageButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
  h1: "h1";
  randomDynamicPageButton: typeof RandomDynamicPageButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDynamicPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDynamicPage__VariantsArgs;
    args?: PlasmicDynamicPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDynamicPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDynamicPage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicDynamicPage__ArgProps,
          internalVariantPropNames: PlasmicDynamicPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDynamicPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDynamicPage";
  } else {
    func.displayName = `PlasmicDynamicPage.${nodeName}`;
  }
  return func;
}

export const PlasmicDynamicPage = Object.assign(
  // Top-level PlasmicDynamicPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    h1: makeNodeComponent("h1"),
    randomDynamicPageButton: makeNodeComponent("randomDynamicPageButton"),

    // Metadata about props expected for PlasmicDynamicPage
    internalVariantProps: PlasmicDynamicPage__VariantProps,
    internalArgProps: PlasmicDynamicPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicDynamicPage;
/* prettier-ignore-end */
