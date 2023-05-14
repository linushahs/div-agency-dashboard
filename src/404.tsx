/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useRouteError } from "react-router-dom";

type RouteError = {
  data: string;
  statusText: string;
  status: number;
  error: {
    message: string;
    stack: string;
  };
};

export default function ErrorPage() {
  // @ts-ignore
  const error: RouteError = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.error.message}</i>
      </p>
    </div>
  );
}
