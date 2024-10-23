import { apiSlice } from "./../api/apiSlice";
import { userLogin, userLogout, userRegis } from "./userSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // registration
    register: builder.mutation({
      query: (data) => ({
        url: "user/registration",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userRegis({
              token: result.data.activationToken,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),

    // user activation
    activation: builder.mutation({
      query: ({ activation_token, activation_code }) => ({
        url: "user/activate-user",
        method: "POST",
        body: {
          activation_token,
          activation_code,
        },
      }),
    }),

    // user login
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "user/login-user",
        method: "POST",
        body: {
          email,
          password,
        },
        credentials: "include",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLogin({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),

    // avatar
    avatar: builder.mutation({
      query: ({ email, name, avatar }) => ({
        url: "user/social-auth",
        method: "POST",
        body: {
          email,
          name,
          avatar,
        },
        credentials: "include",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLogin({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),

    // logout
    logout: builder.mutation({
      query: () => ({
        url: "user/logout",
        method: "POST",
        credentials: "include",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          dispatch(userLogout());
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useActivationMutation,
  useLoginMutation,
  useAvatarMutation,
  useLogoutMutation,
} = authApi;