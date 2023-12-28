<template>
  <div class="w-form-check">
    <div class="w-full h-full p-5">
      <div class="float-left w-1/2 h-full overflow-hidden">
        <div
          class="text-xl font-semibold h-cen-title flex justify-center items-center p-2"
        >
          CENSORED USER PHOTOS
        </div>
        <div class="text-left h-cen-name w-full pt-2 pb-2">
          <div>
            <span class="text-base font-semibold">User name:</span> Nguyen Van
            Duc
          </div>
          <div>
            <span class="text-base font-semibold">Birthday:</span> 01/08/1999
          </div>
        </div>
        <div class="flex justify-between h-cen-option items-center">
          <div class="flex justify-center items-center gap-3">
            <div class="flex items-center gap-2">
              <img
                src="../../assets/icon_svg/ic_pending.svg"
                width="18"
                alt=""
              />
              <div class="text-sm font-semibold">Pending</div>
            </div>
            <div class="flex items-center gap-2">
              <img
                src="../../assets/icon_svg/ic_approved.svg"
                width="18"
                alt=""
              />
              <div class="text-sm font-semibold">Approved</div>
            </div>
            <div class="flex items-center gap-2">
              <img
                src="../../assets/icon_svg/ic_disapprove.svg"
                width="18"
                alt=""
              />
              <div class="text-sm font-semibold">Disapprove</div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button class="btn-bh-button bh-disapprove">Disapprove</button>
            <button class="btn-bh-button bh-approved">Approved</button>
          </div>
        </div>
        <div class="table-detail p-2 h-cen-table w-full mt-5">
          <!--  -->
          <div class="show-scroll h-full">
            <table class="w-full">
              <thead class="sticky top-0 table-detail">
                <tr>
                  <th>
                    <input
                      id="checkbox-1"
                      name="checkbox-1"
                      type="checkbox"
                      value="yes"
                    />
                  </th>
                  <th>STT</th>
                  <th>Avatar</th>
                  <th>Status hand</th>
                  <th>Status AI</th>
                  <th>AI scores</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-column="First Name">
                    <input
                      id="checkbox-1"
                      name="checkbox-1"
                      type="checkbox"
                      value="yes"
                    />
                  </td>
                  <td data-column="Last Name">1</td>
                  <td data-column="Job Title">
                    <div class="flex justify-center items-center">
                      <div
                        class="avatar-img"
                        :style="`background-image:url(${avatarUrl})`"
                      ></div>
                    </div>
                  </td>
                  <td data-column="Twitter">
                    <div class="flex items-center justify-center gap-2">
                      <img
                        src="../../assets/icon_svg/ic_pending.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-base">Pending</div>
                    </div>
                  </td>
                  <td data-column="Twitter">
                    <div class="flex items-center justify-center gap-2">
                      <img
                        src="../../assets/icon_svg/ic_pending.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-base">Pending</div>
                    </div>
                  </td>
                  <td data-column="Twitter">100</td>
                </tr>
                <tr>
                  <td data-column="First Name">
                    <input
                      id="checkbox-1"
                      name="checkbox-1"
                      type="checkbox"
                      value="yes"
                    />
                  </td>
                  <td data-column="Last Name">2</td>
                  <td data-column="Job Title">
                    <div class="flex justify-center items-center">
                      <div
                        class="avatar-img"
                        :style="`background-image:url(${avatarUrl})`"
                      ></div>
                    </div>
                  </td>
                  <td data-column="Twitter">
                    <div class="flex items-center justify-center gap-2">
                      <img
                        src="../../assets/icon_svg/ic_pending.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-base">Pending</div>
                    </div>
                  </td>
                  <td data-column="Twitter">
                    <div class="flex items-center justify-center gap-2">
                      <img
                        src="../../assets/icon_svg/ic_pending.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-base">Pending</div>
                    </div>
                  </td>
                  <td data-column="Twitter">100</td>
                </tr>
                <tr>
                  <td data-column="First Name">
                    <input
                      id="checkbox-1"
                      name="checkbox-1"
                      type="checkbox"
                      value="yes"
                    />
                  </td>
                  <td data-column="Last Name">3</td>
                  <td data-column="Job Title">
                    <div class="flex justify-center items-center">
                      <div
                        class="avatar-img"
                        :style="`background-image:url(${avatarUrl})`"
                      ></div>
                    </div>
                  </td>
                  <td data-column="Twitter">
                    <div class="flex items-center justify-center gap-2">
                      <img
                        src="../../assets/icon_svg/ic_pending.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-sm">Pending</div>
                    </div>
                  </td>
                  <td data-column="Twitter">
                    <div class="flex items-center justify-center gap-2">
                      <img
                        src="../../assets/icon_svg/ic_pending.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-sm">Pending</div>
                    </div>
                  </td>
                  <td data-column="Twitter">100</td>
                </tr>
                <tr>
                  <td data-column="First Name">
                    <input
                      id="checkbox-1"
                      name="checkbox-1"
                      type="checkbox"
                      value="yes"
                    />
                  </td>
                  <td data-column="Last Name">3</td>
                  <td data-column="Job Title">
                    <div class="flex justify-center items-center">
                      <div
                        class="avatar-img"
                        :style="`background-image:url(${avatarUrl})`"
                      ></div>
                    </div>
                  </td>
                  <td data-column="Twitter">
                    <div class="flex items-center justify-center gap-2">
                      <img
                        src="../../assets/icon_svg/ic_pending.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-sm">Pending</div>
                    </div>
                  </td>
                  <td data-column="Twitter">
                    <div class="flex items-center justify-center gap-2">
                      <img
                        src="../../assets/icon_svg/ic_pending.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-sm">Pending</div>
                    </div>
                  </td>
                  <td data-column="Twitter">100</td>
                </tr>
                <tr>
                  <td data-column="First Name">
                    <input
                      id="checkbox-1"
                      name="checkbox-1"
                      type="checkbox"
                      value="yes"
                    />
                  </td>
                  <td data-column="Last Name">3</td>
                  <td data-column="Job Title">
                    <div class="flex justify-center items-center">
                      <div
                        class="avatar-img"
                        :style="`background-image:url(${avatarUrl})`"
                      ></div>
                    </div>
                  </td>
                  <td data-column="Twitter">
                    <div class="flex items-center justify-center gap-2">
                      <img
                        src="../../assets/icon_svg/ic_pending.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-sm">Pending</div>
                    </div>
                  </td>
                  <td data-column="Twitter">
                    <div class="flex items-center justify-center gap-2">
                      <img
                        src="../../assets/icon_svg/ic_pending.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-sm">Pending</div>
                    </div>
                  </td>
                  <td data-column="Twitter">100</td>
                </tr>
                <tr>
                  <td data-column="First Name">
                    <input
                      id="checkbox-1"
                      name="checkbox-1"
                      type="checkbox"
                      value="yes"
                    />
                  </td>
                  <td data-column="Last Name">3</td>
                  <td data-column="Job Title">
                    <div class="flex justify-center items-center">
                      <div
                        class="avatar-img"
                        :style="`background-image:url(${avatarUrl})`"
                      ></div>
                    </div>
                  </td>
                  <td data-column="Twitter">
                    <div class="flex items-center justify-center gap-2">
                      <img
                        src="../../assets/icon_svg/ic_pending.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-sm">Pending</div>
                    </div>
                  </td>
                  <td data-column="Twitter">
                    <div class="flex items-center justify-center gap-2">
                      <img
                        src="../../assets/icon_svg/ic_pending.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-sm">Pending</div>
                    </div>
                  </td>
                  <td data-column="Twitter">100</td>
                </tr>

                <tr>
                  <td data-column="First Name">
                    <input
                      id="checkbox-1"
                      name="checkbox-1"
                      type="checkbox"
                      value="yes"
                    />
                  </td>
                  <td data-column="Last Name">3</td>
                  <td data-column="Job Title">
                    <div class="flex justify-center items-center">
                      <div
                        class="avatar-img"
                        :style="`background-image:url(${avatarUrl})`"
                      ></div>
                    </div>
                  </td>
                  <td data-column="Twitter">
                    <div class="flex items-center justify-center gap-2">
                      <img
                        src="../../assets/icon_svg/ic_pending.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-sm">Pending</div>
                    </div>
                  </td>
                  <td data-column="Twitter">
                    <div class="flex items-center justify-center gap-2">
                      <img
                        src="../../assets/icon_svg/ic_pending.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-sm">Pending</div>
                    </div>
                  </td>
                  <td data-column="Twitter">100</td>
                </tr>
                <tr>
                  <td data-column="First Name">
                    <input
                      id="checkbox-1"
                      name="checkbox-1"
                      type="checkbox"
                      value="yes"
                    />
                  </td>
                  <td data-column="Last Name">3</td>
                  <td data-column="Job Title">
                    <div class="flex justify-center items-center">
                      <div
                        class="avatar-img"
                        :style="`background-image:url(${avatarUrl})`"
                      ></div>
                    </div>
                  </td>
                  <td data-column="Twitter">
                    <div class="flex items-center justify-center gap-2">
                      <img
                        src="../../assets/icon_svg/ic_pending.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-sm">Pending</div>
                    </div>
                  </td>
                  <td data-column="Twitter">
                    <div class="flex items-center justify-center gap-2">
                      <img
                        src="../../assets/icon_svg/ic_pending.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-sm">Pending</div>
                    </div>
                  </td>
                  <td data-column="Twitter">100</td>
                </tr>
                <tr>
                  <td data-column="First Name">
                    <input
                      id="checkbox-1"
                      name="checkbox-1"
                      type="checkbox"
                      value="yes"
                    />
                  </td>
                  <td data-column="Last Name">3</td>
                  <td data-column="Job Title">
                    <div class="flex justify-center items-center">
                      <div
                        class="avatar-img"
                        :style="`background-image:url(${avatarUrl})`"
                      ></div>
                    </div>
                  </td>
                  <td data-column="Twitter">
                    <div class="flex items-center justify-center gap-2">
                      <img
                        src="../../assets/icon_svg/ic_pending.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-sm">Pending</div>
                    </div>
                  </td>
                  <td data-column="Twitter">
                    <div class="flex items-center justify-center gap-2">
                      <img
                        src="../../assets/icon_svg/ic_pending.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-sm">Pending</div>
                    </div>
                  </td>
                  <td data-column="Twitter">100</td>
                </tr>
                <tr>
                  <td data-column="First Name">
                    <input
                      id="checkbox-1"
                      name="checkbox-1"
                      type="checkbox"
                      value="yes"
                    />
                  </td>
                  <td data-column="Last Name">3</td>
                  <td data-column="Job Title">
                    <div class="flex justify-center items-center">
                      <div
                        class="avatar-img"
                        :style="`background-image:url(${avatarUrl})`"
                      ></div>
                    </div>
                  </td>
                  <td data-column="Twitter">
                    <div class="flex items-center justify-center gap-2">
                      <img
                        src="../../assets/icon_svg/ic_pending.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-sm">Pending</div>
                    </div>
                  </td>
                  <td data-column="Twitter">
                    <div class="flex items-center justify-center gap-2">
                      <img
                        src="../../assets/icon_svg/ic_pending.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-sm">Pending</div>
                    </div>
                  </td>
                  <td data-column="Twitter">100</td>
                </tr>
                <tr>
                  <td data-column="First Name">
                    <input
                      id="checkbox-1"
                      name="checkbox-1"
                      type="checkbox"
                      value="yes"
                    />
                  </td>
                  <td data-column="Last Name">3</td>
                  <td data-column="Job Title">
                    <div class="flex justify-center items-center">
                      <div
                        class="avatar-img"
                        :style="`background-image:url(${avatarUrl})`"
                      ></div>
                    </div>
                  </td>
                  <td data-column="Twitter">
                    <div class="flex items-center justify-center gap-2">
                      <img
                        src="../../assets/icon_svg/ic_pending.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-sm">Pending</div>
                    </div>
                  </td>
                  <td data-column="Twitter">
                    <div class="flex items-center justify-center gap-2">
                      <img
                        src="../../assets/icon_svg/ic_pending.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-sm">Pending</div>
                    </div>
                  </td>
                  <td data-column="Twitter">100</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!--  -->
        </div>
      </div>

      <div class="float-right w-1/2 h-full p-5 overflow-hidden">
        <div
          class="avatar-default"
          :style="`background-image:url(${avatarUrl})`"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "check-image",

  data() {
    return {
      nameDisapprove: "Disapprove",
      nameApproved: "Approved",
      avatarUrl: require("@/assets/icon_svg/avatar.jpg"),
    };
  },

  mounted() {},

  methods: {
    onChangeDisapprove() {},

    onChangeApproved() {},
  },
};
</script>

<style lang="scss" scoped>
.w-form-check {
  width: 90rem;
  height: 46rem;

  background-color: #ffffff;
}

.h-cen-title {
  height: 50px;
}
.h-cen-name {
  height: 65px;
}
.h-cen-option {
  height: 50px;
}
.h-cen-table {
  height: calc(100% - 50px - 65px - 50px);
}

.avatar-default {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.btn-bh-button {
  padding: 8px 20px;
  border-radius: 30px;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  line-height: 1;
  letter-spacing: 0.5px;
  overflow: hidden;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-clip: border-box;
  background-origin: border-box;
  border: 2px solid #00000000;
}

.bh-disapprove {
  background: linear-gradient(to top right, #ad6363, #a04141);
}

.bh-approved {
  background: linear-gradient(to top right, #a0ac64, #368b21);
}

table tr td {
  text-align: center;
  padding: 10px 0px 0px 0px;
}

table tbody tr:hover {
  background-color: #ccc;
}

thead tr th {
  padding: 16px 0px;
}

.avatar-img {
  width: 60px;
  height: 60px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 40px;
}

.table-detail {
  background-color: #f7f1f1;
}

/* Styles for screens up to 600 pixels wide */
@media only screen and (max-width: 600px) {
  .w-form-check {
    width: 30rem;
    height: 46rem;
  }
  /* Additional styles for smaller screens go here */
}

/* Styles for screens between 601 and 900 pixels wide */
@media only screen and (min-width: 601px) and (max-width: 900px) {
  .w-form-check {
    width: 40rem;
    height: 46rem;
  }
  /* Additional styles for medium-sized screens go here */
}

/* Styles for screens between 901 and 1200 pixels wide */
@media only screen and (min-width: 901px) and (max-width: 1200px) {
  .w-form-check {
    width: 48rem;
    height: 46rem;
  }
  /* Additional styles for larger medium-sized screens go here */
}

/* Styles for screens larger than 1200 pixels wide */
@media only screen and (min-width: 1201px) {
  .w-form-check {
    width: 70rem;
    height: 46rem;
  }
  /* Additional styles for larger screens go here */
}

.show-scroll {
  overflow-y: scroll;
}
.show-scroll::-webkit-scrollbar {
  width: 5px;
}
.show-scroll::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.show-scroll::-webkit-scrollbar-thumb {
  background: #888;
}
.show-scroll::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
