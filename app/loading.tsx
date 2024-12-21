import "./loading.css";

export default function LayoutLoading() {
  //     return <span className="loader"></span>;
  return (
    <div className="h-screen relative">
      <span className="loader relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
    </div>
  );
}
