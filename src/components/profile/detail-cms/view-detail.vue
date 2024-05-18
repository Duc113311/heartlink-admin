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
      <div class="w-full">
        <div class="flex w-full items-center gap-2">
          <img src="../../../assets/icon_svg/ic_school.svg" width="15" alt="" />
          <div class="text-base">{{ renderObject.profiles.school }}</div>
        </div>
        <div class="flex w-full items-center gap-2">
          <img src="../../../assets/icon_svg/ic_gender.svg" width="15" alt="" />
          <div class="text-base">
            {{ renderGender(renderObject.profiles.gender) }}
          </div>
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
      <div class="w-full grid gap-2 block">
        <div class="text-left text-base border rounded-lg p-2">
          <div>{{ renderObject.profiles.about }}</div>
          <div>
            <div>
              <div>Đang tìm kiếm gì</div>
            </div>
            <div>
              {{ renderDatingPurchased(renderObject.profiles.datingPurpose) }}
            </div>
          </div>
        </div>
        <div class="text-left text-base border rounded-lg p-2">
          <div class="font-semibold">Thông tin cơ bản</div>
          <div class="w-full flex justify-between items-center p-2">
            <div class="text-left">
              <div>
                <div class="font-medium text-base flex gap-2 items-center">
                  <img :src="icZodiac" width="20" alt="" />
                  <span>Zodiac</span>
                </div>
                <div class="text-base">
                  {{ renderZodiacs(renderObject.profiles.zodiac) }}
                </div>
              </div>
              <div>
                <div class="font-medium text-base flex gap-2 items-center">
                  <img :src="icFamilyFlan" width="20" alt="" />
                  <span>Family</span>
                </div>
                <div>
                  {{ renderFamilyPlans(renderObject.profiles.familyPlan) }}
                </div>
              </div>
              <div>
                <div class="font-medium text-base flex gap-2 items-center">
                  <img :src="icEducation" width="20" alt="" />
                  <span>Education</span>
                </div>
                <div>
                  {{ renderEducations(renderObject.profiles.education) }}
                </div>
              </div>
              <div>
                <div class="font-medium text-base flex gap-2 items-center">
                  <img :src="icCovidVaccine" width="20" alt="" />
                  <span>Vaccinated</span>
                </div>
                <div>
                  {{ renderCovidVaccines(renderObject.profiles.covidVaccine) }}
                </div>
              </div>
            </div>
            <div class="text-left">
              <div>
                <div class="font-medium text-base flex gap-2 items-center">
                  <img :src="icPersonality" width="20" alt="" />
                  <span>Personality</span>
                </div>
                <div>
                  {{ renderPersonalities(renderObject.profiles.personality) }}
                </div>
              </div>
              <div>
                <div class="font-medium text-base flex gap-2 items-center">
                  <img :src="icCommunicationType" width="20" alt="" />
                  <span>Communication</span>
                </div>
                <div>
                  {{
                    renderCommunicationStyles(
                      renderObject.profiles.communicationType
                    )
                  }}
                </div>
              </div>
              <div>
                <div class="font-medium text-base flex gap-2 items-center">
                  <img :src="icLoveStyle" width="20" alt="" />
                  <span>Love</span>
                </div>
                <div>
                  {{ renderLoveStyles(renderObject.profiles.loveStyle) }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-left text-base border rounded-lg p-2">
          <div class="font-semibold">Phong cách sống</div>
          <div class="w-full flex justify-between items-center p-2">
            <div class="text-left">
              <div>
                <div class="font-medium text-base flex gap-2 items-center">
                  <img :src="icPet" width="20" alt="" />
                  <span>Pets</span>
                </div>
                <div>{{ renderPets(renderObject.profiles.pet) }}</div>
              </div>
              <div>
                <div class="font-medium text-base flex gap-2 items-center">
                  <img :src="icDrinking" width="20" alt="" />
                  <span>Drink</span>
                </div>
                <div>{{ renderDrinkings(renderObject.profiles.drinking) }}</div>
              </div>
              <div>
                <div class="font-medium text-base flex gap-2 items-center">
                  <img :src="icSmoking" width="20" alt="" />
                  <span>Smoke</span>
                </div>
                <div>{{ renderSmokings(renderObject.profiles.smoking) }}</div>
              </div>
              <div>
                <div class="font-medium text-base flex gap-2 items-center">
                  <img :src="icWorkout" width="20" alt="" />
                  <span>Workout</span>
                </div>
                <div>{{ renderWorkouts(renderObject.profiles.workout) }}</div>
              </div>
            </div>
            <div class="text-left">
              <div>
                <div class="font-medium text-base flex gap-2 items-center">
                  <img :src="icDietaryPreference" width="20" alt="" />
                  <span>Dietary</span>
                </div>
                <div>
                  {{
                    renderFoodPreferences(
                      renderObject.profiles.dietaryPreference
                    )
                  }}
                </div>
              </div>
              <div>
                <div class="font-medium text-base flex gap-2 items-center">
                  <img :src="icSocialMedia" width="20" alt="" />
                  <span>Social media</span>
                </div>
                <div>
                  {{ renderSocials(renderObject.profiles.socialMedia) }}
                </div>
              </div>
              <div>
                <div class="font-medium text-base flex gap-2 items-center">
                  <img :src="icSleepingHabit" width="20" alt="" />
                  <span>Sleeping</span>
                </div>
                <div>
                  {{
                    renderSleepingStyles(renderObject.profiles.sleepingHabit)
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-left text-base border rounded-lg p-2">
          <div class="font-semibold">Language I know</div>

          <div
            v-for="(item, index) in renderLanguages(
              renderObject.profiles.languages
            )"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
        <div class="text-left text-base border rounded-lg p-2">
          <div class="font-semibold">Sexual Orientation</div>

          <div
            v-for="(item, index) in renderSexuals(
              renderObject.profiles.orientationSexuals
            )"
            :key="index"
          >
            {{ item }}
          </div>
        </div>

        <div class="text-left text-base border rounded-lg p-2">
          <div class="font-semibold">Interests</div>

          <div
            v-for="(item, index) in renderInterests(
              renderObject.profiles.interests
            )"
            :key="index"
          >
            {{ item }}
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
    return {
      icZodiac: require("@/assets/ic_tinder/astrological_sign@2x.png"),
      icFamilyFlan: require("@/assets/ic_tinder/family@1x.png"),
      icEducation: require("@/assets/ic_tinder/education@1x.png"),
      icCovidVaccine: require("@/assets/ic_tinder/covid_comfort@1x.png"),
      icPersonality: require("@/assets/ic_tinder/kietinhcach@2x.png"),
      icCommunicationType: require("@/assets/ic_tinder/communication_style@2x.png"),
      icLoveStyle: require("@/assets/ic_tinder/love_language@1x.png"),

      icPet: require("@/assets/ic_tinder/pets@1x.png"),
      icDrinking: require("@/assets/ic_tinder/drink_of_choice@1x.png"),
      icSmoking: require("@/assets/ic_tinder/smoking@1x.png"),
      icWorkout: require("@/assets/ic_tinder/social_media@1x.png"),
      icDietaryPreference: require("@/assets/ic_tinder/appetite@1x.png"),
      icSocialMedia: require("@/assets/ic_tinder/social_media@1x.png"),
      icSleepingHabit: require("@/assets/ic_tinder/sleeping_habits@1x.png"),
    };
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
      return this.$store.state.commonModule.basicInfors;
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
      let zodiacs = this.renderBasicInfor.zodiacs;
      const findData = zodiacs.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },
    renderPersonalities(val) {
      let personalities = this.renderBasicInfor.personalities;
      const findData = personalities.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },
    renderLoveStyles(val) {
      let loveStyles = this.renderBasicInfor.loveStyles;
      const findData = loveStyles.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },
    renderFamilyPlans(val) {
      let familyPlans = this.renderBasicInfor.familyPlans;
      const findData = familyPlans.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },
    renderEducations(val) {
      let educations = this.renderBasicInfor.educations;
      const findData = educations.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },
    renderCovidVaccines(val) {
      let covidVaccines = this.renderBasicInfor.covidVaccines;
      const findData = covidVaccines.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },

    renderCommunicationStyles(val) {
      let communicationStyles = this.renderBasicInfor.communicationStyles;
      const findData = communicationStyles.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },

    renderDrinkings(val) {
      let drinkings = this.renderLifeStyle.drinkings;
      const findData = drinkings.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },

    renderFoodPreferences(val) {
      let foodPreferences = this.renderLifeStyle.foodPreferences;
      const findData = foodPreferences.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },

    renderPets(val) {
      let pets = this.renderLifeStyle.pets;
      const findData = pets.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },

    renderSleepingStyles(val) {
      let sleepingStyles = this.renderLifeStyle.sleepingStyles;
      const findData = sleepingStyles.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },
    renderSmokings(val) {
      let smokings = this.renderLifeStyle.smokings;
      const findData = smokings.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },
    renderSocials(val) {
      let socials = this.renderLifeStyle.socials;
      const findData = socials.find((x) => x.code === val);
      if (findData) {
        return findData.value;
      }
    },
    renderWorkouts(val) {
      let workouts = this.renderLifeStyle.workouts;
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
