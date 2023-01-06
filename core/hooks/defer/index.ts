import { ref } from "vue"

export const useDefer = (maxFrameCount = 1000) => {
  const frameCount = ref(0)
  const refreshFreameCount = () => {
    requestAnimationFrame(() => {
      frameCount.value++
      if (frameCount.value < maxFrameCount) {
        refreshFreameCount()
      }
    })
  }
  refreshFreameCount()
  return function (showInFrameCount: number) {
    return frameCount.value >= showInFrameCount
  }
}
