<template>
  <div :class="`${theme}-theme`">
    <client-only>
      <vue-particles class="particles" :clickEffect="false" color="#fff" />
    </client-only>
    <main>
      <nuxt/>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      theme: state => state.themes.currentTheme
    })
  },
}
</script>

<style lang="less" scoped>

.particles{
  position: absolute;
  width: 100%;
  height: 100%;
}

main{
    background-color: @primary-green;
    height: 100vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
}

</style>

<style lang="less">

@form-container-width: 550px;
@label-container-width: 400px;
@transition-time: .7s;
@transition: transform @transition-time ease-in-out;

main{
  form.loading{
    opacity: .5;

    &::before{
      display: none;
    }
  }

  .form-container{
    background-color: white;
    width: @form-container-width;
    position: absolute;
    transition: @transition;
    overflow-x: hidden;
  }

  .label-container{
    width: calc(100vw - @form-container-width);
    position: absolute;
    transition: @transition;
    & > div{
        width: @label-container-width;
    }
  }

  .header-logo{
    mask: url(~static/vortex.svg);
    display: inline-block;
    width: 40px;
    height: 40px;
    mask-size: contain;
    transition: 1s;
    background: #000;
  }

  .header-nav-logo{
    margin-bottom: 8rem;

    &:hover > .header-logo{
      transform: rotate(360deg);
    }
  }

  .action-form{
    padding: 8rem;
  }

  @media (max-width: 1024px) {
    .action-form{
        padding:  4rem;
    }

    .form-container{
        width: 400px;
    }

    .label-container{
        width: calc(100vw - 400px);
    }
  }

  @media (max-width: 850px) {

    .form-container{
        width: 100%;
    }

    .action-form{
        padding: 2rem;
    }

    .label-container{
        display: none !important;
    }
  }
}

.dark-theme{

    color: @text-color-dark;

    main{
      background-color: @primary-green-dark;
    }

    .header-logo{
        background-color: @text-color-dark !important;
    }

    .divider{
        color: @text-color-dark;
    }

    label{
        color: @text-color-dark !important;
    }

    .form-container{
        background-color: #1a202c !important;
    }
}

</style>