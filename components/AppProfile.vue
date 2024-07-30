<script setup lang="ts">
import { user } from "~/db";

const fullName = computed(() => {
  return `${user.name} ${user.lastname}`
})
</script>

<template>
  <div class="profile">
    <div class="profile__header">
      <NuxtLink class="app-link profile__header-back" to="/">
        <svgo-arrow />
      </NuxtLink>
      <div class="profile__header-info">
        <div class="profile__header-name">
          {{ fullName }}
          <svgo-verified
            v-if="user.verified"
            class="profile__header-verified"
            filled
          />
        </div>
        <div class="profile__header-posts">
          23 post
        </div>
      </div>
    </div>
    <div
      v-if="user.cover"
      class="profile__cover"
    >
      <img
        :src="user.cover"
        :alt="`${user.lastname}-cover}`"
      >
    </div>
    <div class="profile__about">
      <div class="profile__about-header">
        <div class="profile__about-avatar">
          <img :src="user.avatar" :alt="`${user.lastname}-avatar}`">
        </div>
      </div>
      <div class="profile__about-info">
        <div class="profile__about-info-header">
          <div class="profile__about-info-name">
            {{ fullName }}
            <svgo-verified
              v-if="user.verified"
              class="profile__about-info-verified"
              filled
            />
          </div>
          <div class="profile__about-info-nickname">
            @{{ user.nickname }}
          </div>
        </div>
        <div class="profile__about-info-description">
          {{ user.description }}
        </div>
        <div class="profile__about-info-external">
          <div class="profile__about-info-external-wrap" v-if="user.job">
            <svgo-job />
            {{ user.job }}
          </div>
          <div class="profile__about-info-external-wrap" v-if="user.location">
            <svgo-location />
            {{ user.location }}
          </div>
          <div class="profile__about-info-external-wrap" v-if="user.personalSite">
            <svgo-link />
            <a class="profile__about-info-link" :href="user.personalSite" target="_blank">{{ user.personalSite }}</a>
          </div>
          <div class="profile__about-info-external-wrap" v-if="user.birthday">
            <svgo-baloon />
            Born {{ user.birthday.toDateString() }}
          </div>
          <div class="profile__about-info-external-wrap" v-if="user.joinedDate">
            <svgo-calendar />
            Joined {{ user.joinedDate.toDateString() }}
          </div>
        </div>
        <div class="profile__about-info-stats">
          <div class="profile__about-info-stats-wrap">
            <b>{{ user.stats.following }}</b> Following
          </div>
          <div class="profile__about-info-stats-wrap">
            <b>{{ user.stats.followers }}</b> Followers
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  &__header {
    padding: 4px 0;
    display: flex;
    align-items: center;

    &-info {
      //  ??
    }

    &-back {
      margin-right: 36px;
      color: var(--primary-color);
      padding: 16px;
    }

    &-name {
      font-size: 20px;
      line-height: 24px;
      font-weight: 700;
    }

    &-posts {
      font-size: 13px;
      line-height: 16px;
      color: #536471;
      margin-top: 4px;
    }

    &-verified {
      margin-left: 4px;
    }
  }

  &__cover {
    background-color: var(--primary-color);
    block-size: 200px;
  }

  &__about {
    padding: 0 16px;
    &-header {
      position: relative;
      block-size: 60px;
    }

    &-avatar {
      position: absolute;
      bottom: 0;
      inline-size: 132px;
      block-size: 132px;
      border-radius: 100%;
      overflow: hidden;
      border: 3px solid var(--secondary-color);
    }

    &-info {
      margin-top: 4px;

      &-header {
        padding: 20px 0 16px;
      }

      &-name {
        font-size: 20px;
        line-height: 24px;
        font-weight: 700;
      }

      &-link {
        color: #1D9BF0;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      &-nickname {
        font-size: 13px;
        line-height: 16px;
        color: #536471;
        margin-top: 4px;
      }

      &-description {
        font-size: 15px;
        line-height: 20px;
        margin-top: 4px;
      }

      &-external {
        display: flex;
        flex-wrap: wrap;
        gap: 0 12px;
        color: #536471;
        padding: 8px 0;

        &-wrap {
          display: flex;
          gap: 0 4px;
          font-size: 15px;
          line-height: 20px;

          svg {
            width: 20px;
            height: 20px;
          }
        }
      }

      &-stats {
        display: flex;
        gap: 0 12px;
        margin-top: 4px;

        b {
          color: var(--primary-color);
        }

        &-wrap {
          color: #536471;
          font-size: 15px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
