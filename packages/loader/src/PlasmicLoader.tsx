/** This file is auto-generated by Plasmic; please do not edit! */
import type React from "react";
import { LoaderProps, ProviderProps } from "./loaderTypes";

export default function PlasmicLoader(props: LoaderProps): JSX.Element | null {
  return null;
}

PlasmicLoader.getPlumeType = function (
  props: Pick<LoaderProps, "projectId" | "component">
): string | undefined {
  return undefined;
};

export const componentsByPath: Record<
  string,
  { name: string; projectId: string }
> = {};

export function getPageUrls(): string[] {
  return [];
}

export function getUnregisteredPageUrls(): string[] {
  return [];
}

export function getComponentFromUrl(
  url: string | string[]
): {
  name: any;
  projectId: any;
} {
  throw new Error(
    "This content should be overriden every time you run plasmic loader. If you are seeing this error, please report it as a bug!"
  );
}

export function Providers(
  props: React.PropsWithChildren<ProviderProps>
): JSX.Element | null {
  return null;
}

/**
 * @deprecated This package is no longer supported. We recommend updating to new version of the Headless API. https://docs.plasmic.app/learn/upgrading-to-loader-v2
 */
export function PlasmicRootProvider(props: { children?: React.ReactNode }) {
  return props.children;
}
