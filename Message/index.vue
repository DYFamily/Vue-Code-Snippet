<template>
  <div class="roots" @click="closeb">
    <div class="content" @click.stop="">
      <div class="texts_one">
        <slot name="title"></slot>
        <i @click.stop="closeb" class="el-icon-close"></i>
      </div>
      <div class="texts_two">
        <slot name="content"></slot>
      </div>
      <div class="texts_three">
        <button @click.stop="closeb">
          <slot name="Cancel"></slot>
        </button>

        <button class="btn2" @click.stop="Confirms">
          <slot name="Confirm "></slot>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'APP',
  data() {
    return {}
  },
  methods: {
    closeb() {

      document.body.style.overflow = "auto"
      this.$emit("closeb")

    },
    Confirms() {
      // debugger;
      this.$emit("Confirms")

    }
  },
  created() {
  },
  mounted() {
  },
}
</script>
<style lang="less" scoped>
.roots {
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  top: 0;

  .content {
    position: absolute;
    width: 100%;
    height: 225px;

    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    background: #fff;
    border-radius: 14px;

    .texts_one {
      width: 100%;
      display: flex;
      justify-content: center;
      padding-top: 24px;
      font-family: 'PingFang SC';
      font-style: normal;
      font-size: 18px;
      color: #222;

      i {
        position: absolute;
        right: 16px;
        transform: translateY(-7px);
        font-size: 22px;
      }
    }

    .texts_two {
      padding-top: 48px;
      padding-bottom: 48px;
      padding-left: 40px;
      padding-right: 40px;
      text-align: center;
      width: 100%;
      font-family: 'PingFang SC';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;

      color: #222222;
    }

    .texts_three {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      position: absolute;
      bottom: 24px;

      button {
        width: 93px;
        height: 36px;

        border-radius: 18px;

        color: #707070;
        background: #fff;
        border: 1px solid #CCCCCC;
        font-family: 'PingFang SC';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
      }

      .btn2 {
        color: #fff;
        background: #373abc;
      }


      button:hover {

        cursor: pointer;
      }

      button:active {
        border: 1px solid #2C2EA2;
      }


      .btn2:active {
        background: #2C2EA2;

      }

      .btn2:hover {
        background: #5F61D5;
      }
    }
  }
}
</style>
