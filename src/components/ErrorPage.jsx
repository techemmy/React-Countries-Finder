
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>

      <p>
        <i>{error.statusText || error.message}</i>
          {error.message == 'Failed to fetch' &&
        <p>(Please note that network access to <i>https://restcountries.com/</i> is required<br />
          so that `Where in the world?` app behaves as expected)
        </p>}
      </p>
    </div>
  );
}
