<template>
  <div class="w-full items-center h-full">
    <!-- -->
    <!-- {{ renderObject }} -->
    <div class="w-full gap-4 grid hide-scroll h-[700px]">
      <div class="w-full flex justify-between items-center pb-2 border-b-2">
        <div class="w-full text-left">
          <div class="flex items-center gap-2">
            <div class="font-semibold text-xl">{{ renderObject.fullname }}</div>
            <img src="../../../assets/icon_svg/ic_verified.svg" alt="" />
          </div>
          <div>Active day</div>
        </div>
        <div class="text-right w-full">
          <div class="">
            <div class="text-base font-semibold">Package</div>
          </div>
        </div>
      </div>
      <div class="w-full">
        <el-carousel indicator-position="outside">
          <el-carousel-item
            v-for="item in renderObject.profiles.avatars"
            :key="item"
          >
            <div
              class="imageDetail"
              :style="`background-image:url(${item.meta.url})`"
            />
          </el-carousel-item>
        </el-carousel>

        <!-- <el-carousel :interval="4000" type="card" height="00px">
          <el-carousel-item
            v-for="item in renderObject.profiles.avatars"
            :key="item"
          >
            <div
              class="imageDetail"
              :style="`background-image:url(${item.meta.url})`"
            />
          </el-carousel-item>
        </el-carousel> -->
      </div>
      <div class="w-full gap-2">
        <div class="flex w-full items-center gap-2">
          <img src="../../../assets/icon_svg/ic_school.svg" width="15" alt="" />
          <div class="text-base">{{ renderObject.profiles.school }}</div>
        </div>
        <div class="flex w-full items-center gap-2">
          <img src="../../../assets/icon_svg/ic_gender.svg" width="15" alt="" />
          <div class="text-base">{{ renderObject.profiles.gender }}</div>
        </div>
        <div class="flex w-full items-center gap-2">
          <img src="../../../assets/icon_svg/ic_ruler.svg" width="15" alt="" />
          <div class="text-base">{{ renderObject.profiles.height }}</div>
        </div>
        <div class="flex w-full items-center gap-2">
          <img
            src="../../../assets/icon_svg/ic_company.svg"
            width="15"
            alt=""
          />
          <div class="text-base">{{ renderObject.profiles.company }}</div>
        </div>
      </div>
      <div class="w-full gap-2 block">
        <div class="text-left text-base border rounded-lg p-2">
          <div>{{ renderObject.profiles.about }}</div>
          <div>
            <div>
              <div>Đang tìm kiếm gì</div>
            </div>
            <div>{{ renderObject.profiles.datingPurpose }}</div>
          </div>
        </div>
        <div class="text-left text-base border rounded-lg p-2">
          <div class="font-semibold">Thông tin cơ bản</div>
          <div class="w-full flex justify-between items-center">
            <div class="text-left">
              <div>
                <div>Zodiac</div>
                <div>Thiên bình</div>
              </div>
              <div>
                <div>Family</div>
                <div>I want children</div>
              </div>
              <div>
                <div>Education</div>
                <div>In College</div>
              </div>
              <div>
                <div>Vaccinated</div>
                <div>Unvaccinated</div>
              </div>
            </div>
            <div class="text-right">
              <div>
                <div>Personality</div>
                <div>INTJ</div>
              </div>
              <div>
                <div>Communication</div>
                <div>Phone caller</div>
              </div>
              <div>
                <div>Love</div>
                <div>Thoughtful gestures</div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-left text-base border rounded-lg p-2">
          <div class="font-semibold">Phong cách sống</div>
          <div class="w-full flex justify-between items-center">
            <div class="text-left">
              <div>
                <div>Pets</div>
                <div>Dog</div>
              </div>
              <div>
                <div>Drink</div>
                <div>Not for me</div>
              </div>
              <div>
                <div>Smoke</div>
                <div>Social smoker</div>
              </div>
              <div>
                <div>Workout</div>
                <div>Everyday</div>
              </div>
            </div>
            <div class="text-right">
              <div>
                <div>Dietary</div>
                <div>Vegetarian</div>
              </div>
              <div>
                <div>Social media</div>
                <div>Influencer status</div>
              </div>
              <div>
                <div>Sleeping</div>
                <div>Early bird</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "view-detail",

  data() {
    return {};
  },

  props: {
    objectCustomer: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    renderObject() {
      return this.objectCustomer;
    },

    renderBasicInfor() {
      return this.$store.state.commonModule.listImageCMS;
    },
    renderLifeStyle() {
      return this.$store.state.commonModule.lifeStyles;
    },
    renderPrompt() {
      return this.$store.state.commonModule.listPrompt;
    },
    renderCommonStatic() {
      return this.$store.state.commonModule.commonStatic;
    },
  },

  mounted() {},

  methods: {
    renderDatingPurchased(val) {
      let datingPurposes = this.renderCommonStatic.datingPurposes;
      const findData = datingPurposes.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },
    renderGender(val) {
      let genders = this.renderCommonStatic.genders;
      const findData = genders.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },

    renderInterests(val) {
      let result = [];
      let interests = this.renderCommonStatic.interests;
      for (let index = 0; index < val.length; index++) {
        const element = val[index];
        const findData = interests.find((x) => x.code === element);
        if (findData) {
          result.push(findData.value);
        }
      }
      return result;
    },

    renderSexuals(val) {
      let result = [];
      let sexuals = this.renderCommonStatic.sexuals;
      for (let index = 0; index < val.length; index++) {
        const element = val[index];
        const findData = sexuals.find((x) => x.code === element);
        if (findData) {
          result.push(findData.value);
        }
      }
      return result;
    },

    renderLanguages(val) {
      let result = [];
      let languages = this.renderCommonStatic.languages;
      for (let index = 0; index < val.length; index++) {
        const element = val[index];
        const findData = languages.find((x) => x.code === element);
        if (findData) {
          result.push(findData.value);
        }
      }
      return result;
    },

    renderZodiacs(val) {
      let zodiacs = this.renderCommonStatic.zodiacs;
      const findData = zodiacs.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },
    renderPersonalities(val) {
      let personalities = this.renderCommonStatic.personalities;
      const findData = personalities.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },
    renderLoveStyles(val) {
      let loveStyles = this.renderCommonStatic.loveStyles;
      const findData = loveStyles.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },
    renderFamilyPlans(val) {
      let familyPlans = this.renderCommonStatic.familyPlans;
      const findData = familyPlans.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },
    renderEducations(val) {
      let educations = this.renderCommonStatic.educations;
      const findData = educations.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },
    renderCovidVaccines(val) {
      let covidVaccines = this.renderCommonStatic.covidVaccines;
      const findData = covidVaccines.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },

    renderCommunicationStyles(val) {
      let communicationStyles = this.renderCommonStatic.communicationStyles;
      const findData = communicationStyles.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },

    renderDrinkings(val) {
      let drinkings = this.renderCommonStatic.drinkings;
      const findData = drinkings.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },

    renderFoodPreferences(val) {
      let foodPreferences = this.renderCommonStatic.foodPreferences;
      const findData = foodPreferences.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },

    renderPets(val) {
      let pets = this.renderCommonStatic.pets;
      const findData = pets.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },

    renderSleepingStyles(val) {
      let sleepingStyles = this.renderCommonStatic.sleepingStyles;
      const findData = sleepingStyles.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },
    renderSmokings(val) {
      let smokings = this.renderCommonStatic.smokings;
      const findData = smokings.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },
    renderSocials(val) {
      let socials = this.renderCommonStatic.socials;
      const findData = socials.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },
    renderWorkouts(val) {
      let workouts = this.renderCommonStatic.workouts;
      const findData = workouts.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },
  },
};
</script>

<style lang="scss">
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.imageDetail {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
