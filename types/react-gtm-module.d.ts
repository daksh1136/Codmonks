declare module "react-gtm-module" {
  interface TagManagerArgs {
    gtmId: string;
    dataLayer?: object;
    auth?: string;
    preview?: string;
  }

  interface TagManager {
    initialize: (args: TagManagerArgs) => void;
    dataLayer: (args: object) => void;
  }

  const tagManager: TagManager;
  export default tagManager;
}