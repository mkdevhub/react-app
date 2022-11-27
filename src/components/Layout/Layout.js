function Layout(props) {
  return (
    <div className="main p-5">
      <div className="container">{props.children}</div>
    </div>
  );
}
export default Layout;
