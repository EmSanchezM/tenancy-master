import { createContextId } from "@builder.io/qwik";
import { type ProfileState } from "./types";

export const ProfileContext = createContextId<ProfileState>('auth.profile-context');


