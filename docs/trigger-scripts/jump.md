# Jump

![Jump](https://i.postimg.cc/3J904vjp/jump.png)

## Functionality

Launches the player in a distance calculated based on the horizontal and vertical speed.

### Blocks to Vertical Speed Calculator

<script setup>
import { ref } from "vue";

const jumpBlocksAmount = ref("");
const result = ref("");

function blocksToVerticalSpeed() {
  const blocks = Number(jumpBlocksAmount.value);
  if (blocks > 66) {
    result.value = "Maximum is 66 blocks"
    return;
  };

  if (blocks < 0) {
    result.value = "Negatives are invalid";
    return;
  }

  const height = blocks * 0.25; // 0.25 is voxel height
  const a = 16.57, b = -0.54, c = 0.24 - height;

  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    result.value = (height / 16.25).toFixed(3); // Linear fallback for values x < 2 & x > 0
    return;
  }

  const v1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const v2 = (-b - Math.sqrt(discriminant)) / (2 * a);

  const speed = Math.max(v1, v2);

  result.value = Math.min(Math.max(speed, 0), 1).toFixed(3);
}
</script>

<div>
  <br>
  <form>
    <input v-model="jumpBlocksAmount" placeholder="Amount of blocks"/>
    <input v-model="result" placeholder="Result" readonly style="cursor: auto;"/>
    <button type="button" class="button" @click="blocksToVerticalSpeed">
      Convert
    </button>
  </form>
</div>