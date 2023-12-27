<template>
  <div class="w-form-check">
    <div class="w-full h-full p-5">
      <div class="float-left w-1/2 h-full overflow-hidden">
        <div class="text-xl font-semibold flex justify-center items-center p-2">
          CENSORED USER PHOTOS
        </div>
        <div class="text-left w-full pt-2 pb-2">
          <div>User name: Nguyen Van Duc</div>
          <div>Birthday: 01/08/1999</div>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex justify-center items-center gap-3">
            <div class="flex items-center gap-2">
              <img
                src="../../assets/icon_svg/ic_pending.svg"
                width="18"
                alt=""
              />
              <div class="text-base font-semibold">Pending</div>
            </div>
            <div class="flex items-center gap-2">
              <img
                src="../../assets/icon_svg/ic_approved.svg"
                width="18"
                alt=""
              />
              <div class="text-base font-semibold">Approved</div>
            </div>
            <div class="flex items-center gap-2">
              <img
                src="../../assets/icon_svg/ic_disapprove.svg"
                width="18"
                alt=""
              />
              <div class="text-base font-semibold">Disapprove</div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button class="btn-bh-button bh-disapprove">Disapprove</button>
            <button class="btn-bh-button bh-approved">Approved</button>
          </div>
        </div>
        <div class="table-detail p-2 w-full mt-5">
          <!--  -->
          <div>
            <table class="w-full">
              <thead>
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
  font-size: 16px;
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
}
thead tr th {
  padding: 16px 0px;
}
.avatar-img {
  width: 100px;
  height: 100px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.table-detail {
  background-color: #f7f1f1;
}
</style>
