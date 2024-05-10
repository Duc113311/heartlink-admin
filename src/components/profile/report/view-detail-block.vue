<template>
  <div class="w-full items-center">
    <!-- -->
    <div class="w-full">
      <div class="w-full flex justify-center items-center gap-8 pb-4">
        <div class="items-center">
          <div
            class="font-semibold text-base"
            v-if="renderObjectReport.profileAgent.length !== 0"
          >
            {{ renderObjectReport.profileAgent[0].fullname }}
          </div>
          <div class="flex items-center justify-center">
            <img
              v-if="renderObjectReport.avatarAgent.length !== 0"
              class="rounded-circle w-16 h-16 rounded-full border-2 border-gray-50"
              :src="renderObjectReport.avatarAgent[0].avatars[0].meta.url"
              alt=""
              srcset=""
            />
          </div>
          <div>Agent</div>
        </div>
        <div>
          <img src="../../../assets/icon_svg/ic_arrow_right.svg" alt="" />
        </div>
        <div class="items-center">
          <div
            class="font-semibold text-base"
            v-if="renderObjectReport.profileReported.length !== 0"
          >
            {{ renderObjectReport.profileReported[0].fullname }}
          </div>
          <div class="flex items-center justify-center">
            <div
              v-if="renderObjectReport.avatarReported[0].avatars.length !== 0"
            >
              <img
                class="rounded-circle w-16 h-16 rounded-full border-2 border-gray-50"
                :src="renderObjectReport.avatarReported[0].avatars[0].meta.url"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div>Reported</div>
        </div>
      </div>
      <div class="text-left p-2 font-semibold text-base">
        Thông tin user bị report
      </div>
      <div class="flex justify-between w-full p-3">
        <!-- Left -->
        <div class="w-2/4">
          <el-carousel indicator-position="outside">
            <el-carousel-item
              v-for="item in renderObjectReport.avatarReported[0].avatars"
              :key="item"
            >
              <img :src="item.meta.url" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- Right -->
        <div class="w-2/4">
          <div class="text-left pl-3 pr-3 text-base">
            <div>
              <div
                v-if="renderObjectReport.profileReported[0].disable === true"
                class="flex gap-2 items-center"
              >
                <img
                  src="../../../assets/icon_svg/ic_block.svg"
                  width="20"
                  alt=""
                />
                <span>Block permanently </span>
              </div>

              <div
                v-if="renderObjectReport.profileReported[0].disable === false"
                class="flex items-center"
              >
                <div
                  v-if="renderObjectReport.profileReported[0].block"
                  class="flex items-center gap-2"
                >
                  <img
                    src="../../../assets/icon_svg/ic_block.svg"
                    width="20"
                    alt=""
                  />
                  <div>
                    <span
                      >Date unlock
                      {{
                        convertTimeBlock(
                          renderObjectReport.profileReported[0].block.when
                        ).formattedDate
                      }}
                    </span>
                  </div>
                </div>
                <div
                  v-if="renderObjectReport.profileReported[0].unlock"
                  class="flex items-center gap-2"
                >
                  <img
                    src="../../../assets/icon_svg/ic_unlock.svg"
                    width="20"
                    alt=""
                  />
                  <div class="">
                    <span>Unlocked </span>
                    <span>{{
                      convertTimeBlock(
                        renderObjectReport.profileReported[0].unlock.when
                      ).formattedDate
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span class="font-semibold">FullName:&nbsp;</span>
              <span>{{ renderObjectReport.profileReported[0].fullname }}</span>
            </div>
            <div>
              <span class="font-semibold">Gender:&nbsp;</span>
              <span>{{
                renderObjectReport.profileReported[0].profiles.gender
              }}</span>
            </div>
            <div>
              <span class="font-semibold">Address:&nbsp;</span>
              <span>{{
                renderObjectReport.profileReported[0].profiles.address
              }}</span>
            </div>
            <div>
              <span class="font-semibold">Height :&nbsp;</span>
              <span
                >{{
                  renderObjectReport.profileReported[0].profiles.height
                }}
                cm</span
              >
            </div>
            <div>
              <span class="font-semibold">School:&nbsp;</span>
              <span
                >{{ renderObjectReport.profileReported[0].profiles.school }}
              </span>
            </div>
          </div>
          <div class="text-left pl-3 pr-3 text-base mt-2">
            <div>
              <span class="font-semibold"> * Reason</span> <br />
              <span>{{ renderReasonCode(renderObjectReport.reasonCode) }}</span>
            </div>
            <div>
              <span class="font-semibold">* Reason title</span> <br />
              <span>{{
                renderReasonCode(
                  renderObjectReport.reasonCode,
                  renderObjectReport.codeTitle
                )
              }}</span>
            </div>
            <div>
              <span class="font-semibold">* Reason detail</span> <br />
              <span>{{
                renderReasonCode(
                  renderObjectReport.reasonCode,
                  renderObjectReport.codeTitle,
                  renderObjectReport.codeDetail
                )
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import funValidation from "../../../middleware/validation";

export default {
  name: "view-detail-block",

  data() {
    return {
      avatarDefault: require("@/assets/icon_svg/avatar.jpg"),
    };
  },

  props: {
    objectReport: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    renderObjectReport() {
      return this.objectReport;
    },

    listReasons() {
      const result = this.$store.state.commonModule.listReasons;
      return result;
    },
  },

  mounted() {},

  methods: {
    convertTimeBlock(val) {
      return funValidation.convertDateTime(val);
    },
    renderReasonCode(val) {
      const listReasonParam = this.listReasons;

      const findData = listReasonParam.find((x) => x.code === val);

      return findData.value;
    },

    renderTitleCode(valueReasonCode, valueCodeTitle) {
      const listReasonParam = this.listReasons;

      const findData = listReasonParam.find((x) => x.code === valueReasonCode);
      if (findData) {
        const findDataTitle = findData.codeReason.find(
          (x) => x.codeTitle === valueCodeTitle
        );
        if (findDataTitle) {
          return findDataTitle.value;
        }
      }
    },

    renderDetailCode(valueReasonCode, valueCodeTitle, valueCodeDetail) {
      const listReasonParam = this.listReasons;

      const findData = listReasonParam.find((x) => x.code === valueReasonCode);
      if (findData) {
        const findDataTitle = findData.codeReason.find(
          (x) => x.codeTitle === valueCodeTitle
        );
        if (findDataTitle) {
          const findDetail = findDataTitle.codeReasonDetail.find(
            (x) => x.codeDetail === valueCodeDetail
          );

          if (findDetail) {
            return findDetail.value;
          }
        }
      }
    },
  },
};
</script>
