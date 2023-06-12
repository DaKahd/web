function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  var sidebarWidth = sidebar.offsetWidth;

  if (sidebar.style.left === "0px") {
    sidebar.style.left = `-${sidebarWidth}px`;
  } else {
    sidebar.style.left = "0px";
  }
}
