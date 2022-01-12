export interface Viewer {
  id: string | null;
  name: string | null;
  token: string | null;
  avatar: string | null;
  hasWallet: boolean | null;
  didRequest: boolean;
  language?: any;
}
export interface LangProps {
  user: {
    lang: string;
    languages: [
      {
        code: string;
        title: string;
      }
    ];
  };
}
