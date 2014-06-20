
/* Hey Ard, do all your js stuff in the window.onload :D */

window.onload = function () {

  /* Constructor for the tabs on the page
  ========================= */
  function Tabs (el) {
    this.el = el;

    var props = {
      ul : el.getElementsByTagName('ul')[0],
      tabs : [] // collection
    };

    var tabContent = el.getElementsByClassName('tab-content'),
          tabs = props.ul.getElementsByTagName('li');

    for(var i = 0; i<tabs.length;i++) {
      props.tabs.push({
        tab : new TabView(tabs[i], tabContent[i])
      });
    }

    function clearClasses () {
      for(var t = 0; t<props.tabs.length; t++) {
        props.tabs[t].tab.clearClass();
      }
    }

    /* This is the controller for each tab and content
    ================================== */
    function TabView (tab, content) {

      function addClass() {
        tab.setAttribute("class", "active");
        content.setAttribute("class", "tab-content active");
      }
      if(tab.addEventListener) {
        tab.addEventListener('click', function () {
          clearClasses();
          addClass();
        });
      } else if (tab.attachEvent) {
        tab.attachEvent('onclick', function () {
          clearClasses();
          addClass();
        });
      }
      return {
        clearClass : function () {
          var classes = content.getAttribute("class").split(" ");
          tab.setAttribute("class", " ");
          content.setAttribute("class", classes[0]);
        }
      }
    }
  }

  /* Check if tabs exists and then instantiate the tabs constructor
  ============================================= */
  var tabsContainer = document.getElementById('tab-content-container-prototype');
  if(tabsContainer !== undefined) {
    new Tabs(tabsContainer);
  }

}