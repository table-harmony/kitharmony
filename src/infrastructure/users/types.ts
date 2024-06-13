export type UserDto = {
  id: string;
  username: string;
  picture: string;
  email: string | null;
  github_id: number;
};

export type CreateUserDto = {
  username: string;
  picture: string;
  email: string | null;
  github_id: number;
};

export type UpdateUserDto = {
  id: string;
  username?: string;
  picture?: string;
  email?: string | null;
};
