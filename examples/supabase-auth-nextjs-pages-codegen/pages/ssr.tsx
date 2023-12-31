// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/supabase_auth/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../components/plasmic/supabase_auth/PlasmicGlobalVariant__Screen";
import { PlasmicSsr } from "../components/plasmic/supabase_auth/PlasmicSsr";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { getPlasmicAuthData } from "../utils/plasmic-auth";
import { PlasmicUser } from "@plasmicapp/auth-api";
import { PlasmicRootProvider } from "@plasmicapp/react-web";

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch the user and auth token while on the server
  const supabaseServerClient = createPagesServerClient(context);
  const { plasmicUser, plasmicUserToken } = await getPlasmicAuthData(
    supabaseServerClient
  );

  return {
    props: {
      plasmicUser,
      plasmicUserToken,
      withoutUseAuth: true,
    },
  };
};

function Ssr(props: { plasmicUser?: PlasmicUser; plasmicUserToken?: string }) {
  const { plasmicUser, plasmicUserToken } = props;
  return (
    <PlasmicRootProvider user={plasmicUser} userAuthToken={plasmicUserToken}>
      <GlobalContextsProvider>
        <ph.PageParamsProvider
          params={useRouter()?.query}
          query={useRouter()?.query}
        >
          <PlasmicSsr />
        </ph.PageParamsProvider>
      </GlobalContextsProvider>
    </PlasmicRootProvider>
  );
}

export default Ssr;
