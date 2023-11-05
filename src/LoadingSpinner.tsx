import { InfinitySpin } from "react-loader-spinner";

export function LoadingSpinner() {
  return (
    <div style={{ textAlign: "center" }}>
      <InfinitySpin min-width="20%" width="200" color="#03a9f4" />
    </div>
  );
}
