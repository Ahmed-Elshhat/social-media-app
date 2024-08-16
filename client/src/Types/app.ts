// Redux
export type initialStateType = {
  windowSize: number;
};

export type initialUserState = {
  loading: boolean;
  data: {
    id: number;
    name: string;
  }[];
  error: string
};

export type initialStateCreatePostWindow = {
  createPostIsOpen: boolean
}

// Context
export type windowContext = string

export type  windowContextProps = {
  children: React.ReactNode;
}

// Post Props
export type PostProps = {
  index: number;
  postId: number;
  indexSettingOpen: number | null;
  setIndexSettingOpen: (index: number | null) => void;
};

// Create Post Popup
export type createPostFormState ={
  text: string,
  authorize: string
}
