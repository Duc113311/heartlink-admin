<template>
  <div
    class="navbar-classic navbar navbar-expand-lg navbar navbar-expand navbar-light"
  >
    <div class="flex justify-between w-full">
      <div class="flex items-center">
        <a id="nav-toggle" class="nav-icon me-2 icon-xs">
          <img src="../../assets/icon_svg/ic_nav.svg" alt="" srcset="" />
        </a>
        <div class="ms-lg-3 d-none d-md-none d-lg-block">
          <form class="flex items-center">
            <input placeholder="Search" type="search" class="form-control" />
          </form>
        </div>
      </div>
      <div class="navbar-right-wrap ms-2 flex nav-top-wrap">
        <ul
          class="navbar-right-wrap ms-auto flex nav-top-wrap items-center gap-2"
        >
          <li class="stopevent dropdown">
            <a
              class="btn btn-light cursor-pointer btn-icon rounded-circle indicator indicator-primary text-muted"
              aria-expanded="false"
            >
              <img src="../../assets/icon_svg/ic_bell.svg" alt="" srcset="" />
            </a>
          </li>
          <li class="ms-2 dropdown">
            <a
              class="rounded-circle cursor-pointer"
              id="dropdownUser"
              aria-expanded="false"
              ><div class="avatar avatar-md avatar-indicators avatar-online">
                <img
                  alt="avatar"
                  src="../../assets/icon_svg/avatar.jpg"
                  width="50"
                  class="rounded-circle"
                /></div
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-customer",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.navbar-classic {
  background-color: #fff;
  padding: 0.625rem 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 20, 0.08), 0 1px 2px rgba(0, 0, 20, 0.08);
}

.rounded-circle {
  border-radius: 50%;
}

.avatar-indicators {
  position: relative;
}
.avatar-md {
  width: 2.5rem;
  height: 2.5rem;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.5;
  color: #637381;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #c4cdd5;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control:focus {
  color: #637381;
  background-color: #fff;
  border-color: #b1a5ff;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(98, 75, 255, 0.25);
}
</style>
