<template>
  <div>
    <div class="sticky">
      <div class="horizontal-main hor-menu clearfix">
        <div class="horizontal-mainwrapper container clearfix">
          <div class="nav-wrp">
            <div class="logo-wrp">
              <a href="/"
                ><img
                  src="../assets/images/tz_logo.png"
                  class="header-brand-img desktop-logo"
                  alt="logo"
              /></a>
              <a href="/"
                ><img
                  src="../assets/images/dlogo.png"
                  class="header-brand-img dark-logo"
                  alt="logo"
              /></a>
            </div>
            <div>
              <!--Nav-->
              <nav class="horizontalMenu clearfix">
                <ul class="horizontalMenu-list">
                  <li aria-haspopup="true">
                    <router-link to="uniswapexplorer"
                      >Uniswap explorer</router-link
                    >
                  </li>
                  <li aria-haspopup="true">
                    <a href="#" class="sub-icon">Sushiswap explorer</a>
                  </li>
                  <li aria-haspopup="true">
                    <a href="#" class="sub-icon">Bsc explorer</a>
                  </li>
                  <li aria-haspopup="true">
                    <router-link to="/bigswapexplorer"
                      >Big Swap Explorer</router-link
                    >
                  </li>
                  <li aria-haspopup="true">
                    <a href="#" class="sub-icon">MultiSwap</a>
                  </li>
                  <li aria-haspopup="true">
                    <router-link to="editprofile">User Account</router-link>
                  </li>
                  <li aria-haspopup="true">
                    <div class="switch">
                      <span class="btn-toggle"></span>
                    </div>
                  </li>
                </ul>
              </nav>
              <!--Nav-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-header hor-mobile-header">
      <div class="container">
        <div class="d-flex">
          <a class="header-brand" href="/">
            <img
              src="../assets/images/tz_logo.png"
              class="header-brand-img desktop-logo mobile-light"
              alt="logo"
            />
            <img
              src="../assets/images/dlogo.png"
              class="header-brand-img desktop-logo mobile-dark"
              alt="logo"
            />
          </a>
          <div class="d-flex order-lg-2 ml-auto header-right-icons">
            <a class="animated-arrow hor-toggle horizontal-navtoggle"
              ><span></span
            ></a>

            <!-- SIDE-MENU -->
          </div>
        </div>
      </div>
    </div>
    <div
      class="mb-1 navbar navbar-expand-lg  responsive-navbar navbar-dark d-md-none bg-white"
    >
      <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
        <div class="d-flex order-lg-2 ml-auto">
          <div class="dropdown d-sm-flex">
            <a href="#" class="nav-link icon" data-toggle="dropdown">
              <i class="fe fe-search"></i>
            </a>
            <div class="dropdown-menu header-search dropdown-menu-left">
              <div class="input-group w-100 p-2">
                <input
                  type="text"
                  class="form-control "
                  placeholder="Search...."
                />
                <div class="input-group-append ">
                  <button type="button" class="btn btn-primary ">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-env jquery */
export default {
  name: "navigation",

  mounted() {
    // dark theme
    document.addEventListener("DOMContentLoaded", function() {
      const main = document.querySelector("body");
      const toggleSwitch = document.querySelector(".switch");

      toggleSwitch.addEventListener("click", () => {
        main.classList.toggle("dark-theme");
      });
    });

    jQuery(
      (function() {
        "use strict";
        document.addEventListener("touchstart", function() {}, false);
        jQuery(function() {
          jQuery("body").wrapInner('<div class="horizontalMenucontainer" />');
          jQuery('<div class="horizontal-overlapbg"></div>').prependTo(
            ".horizontalMenu"
          );
          jQuery(".horizontal-navtoggle").click(function() {
            jQuery("body").toggleClass("active");
          });
          jQuery(".horizontal-overlapbg").click(function() {
            jQuery("body").removeClass("active");
          });
          jQuery(".horizontalMenu > .horizontalMenu-list > li")
            .has(".sub-menu")
            .prepend(
              '<span class="horizontalMenu-click"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span>'
            );
          jQuery(".horizontalMenu > .horizontalMenu-list > li")
            .has(".horizontal-megamenu")
            .prepend(
              '<span class="horizontalMenu-click"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span>'
            );
          jQuery(".horizontalMenu-click").click(function() {
            jQuery(this)
              .toggleClass("horizontal-activearrow")
              .parent()
              .siblings()
              .children()
              .removeClass("horizontal-activearrow");
            jQuery(
              ".horizontalMenu > .horizontalMenu-list > li > .sub-menu, .horizontal-megamenu"
            )
              .not(
                jQuery(this).siblings(
                  ".horizontalMenu > .horizontalMenu-list > li > .sub-menu, .horizontal-megamenu"
                )
              )
              .slideUp("slow");
            jQuery(this)
              .siblings(".sub-menu")
              .slideToggle("slow");
            jQuery(this)
              .siblings(".horizontal-megamenu")
              .slideToggle("slow");
          });
          jQuery(".horizontalMenu > .horizontalMenu-list > li > ul > li")
            .has(".sub-menu")
            .prepend(
              '<span class="horizontalMenu-click02"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span>'
            );
          jQuery(
            ".horizontalMenu > .horizontalMenu-list > li > ul > li > ul > li"
          )
            .has(".sub-menu")
            .prepend(
              '<span class="horizontalMenu-click02"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span>'
            );
          jQuery(".horizontalMenu-click02").click(function() {
            jQuery(this)
              .children(".horizontalMenu-arrow")
              .toggleClass("horizontalMenu-rotate");
            jQuery(this)
              .siblings("li > .sub-menu")
              .slideToggle("slow");
          });
          jQuery(window).on("resize", function() {
            if (jQuery(window).outerWidth() < 992) {
              jQuery(".horizontalMenu").css(
                "height",
                jQuery(this).height() + "px"
              );
              jQuery(".horizontalMenucontainer").css(
                "min-width",
                jQuery(this).width() + "px"
              );
            } else {
              jQuery(".horizontalMenu").removeAttr("style");
              jQuery(".horizontalMenucontainer").removeAttr("style");
              jQuery("body").removeClass("active");
              jQuery(
                ".horizontalMenu > .horizontalMenu-list > li > .horizontal-megamenu, .horizontalMenu > .horizontalMenu-list > li > ul.sub-menu, .horizontalMenu > .horizontalMenu-list > li > ul.sub-menu > li > ul.sub-menu, .horizontalMenu > .horizontalMenu-list > li > ul.sub-menu > li > ul.sub-menu > li > ul.sub-menu"
              ).removeAttr("style");
              jQuery(".horizontalMenu-click").removeClass(
                "horizontal-activearrow"
              );
              jQuery(".horizontalMenu-click02 > i").removeClass(
                "horizontalMenu-rotate"
              );
            }
          });
          jQuery(window).trigger("resize");
        });
      })()
    );
  },
};
</script>

<style>
@import "../assets/css/bootstrap.css";
@import "../assets/css/style.css";
@import "../assets/css/skin-modes.css";
@import "../assets/css/datatables.css";
@import "../assets/css/dt-global_style.css";
@import "../assets/css/custom.css";
@import "../assets/css/horizontal-menu.css";
@import "../assets/css/responsive.css";
</style>
