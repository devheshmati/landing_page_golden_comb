<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";

interface ContactData {
  fullName: string;
  email: string;
  message: string;
}

definePageMeta({
  layout: "empty",
});

const toast = useToast();
const z = useZod();

const formData = reactive<ContactData>({
  fullName: "",
  email: "",
  message: "",
});

const resetForm = () => {
  formData.fullName = "";
  formData.email = "";
  formData.message = "";
};

const handleContactForm = async () => {
  if (
    !formData.fullName.trim() ||
    !formData.email.trim() ||
    !formData.message.trim()
  ) {
    toast.warning("Warning", "Input can't be empty");
    return;
  }

  // check email format
  const emailValidate = z.object({ email: z.string().email() });
  const emailCheck = emailValidate.safeParse({ email: formData.email });
  if (!emailCheck.success) {
    toast.warning("Warning", "Email format is not true");
    return;
  }

  try {
    const { status, data, statusMessage, message } = await $fetch(
      "/api/contact",
      {
        method: "POST",
        body: formData,
      },
    );

    if (status === 200) {
      // notification
      toast.success("Success", "Email sended successfully.");
      // reset form
      resetForm();
      return;
    }

    throw createError(message || "Request failed");
  } catch (e) {
    // notification
    toast.error("Error", `Submit form failed!`);
  }
};
</script>

<template>
  <div
    class="page relative min-h-screen h-full w-3/4 grid grid-cols-2 justify-center items-center mx-auto"
  >
    <!-- left -->
    <div class="relative">
      <!-- title -->
      <NuxtLink
        to="/"
        class="absolute left-3/7 top-0 flex flex-col text-4xl text-honey uppercase opacity-80 hover:opacity-100 hover:drop-shadow-[0_0_10px_theme(colors.honey),0_10px_8px_rgb(0_0_0/0.15)] cursor-pointer z-100 transition-filter duration-300"
      >
        <div>Golden Comb</div>
        <div class="text-honey-glow">Bee Farm</div>
      </NuxtLink>

      <!-- image cells -->
      <div class="h-[500px] w-full relative">
        <img
          class="absolute top-0 left-0 w-[220px] h-[220px] mask-[url(/svg/hexagonal-svgrepo-com.svg)]"
          src="/images/Close_shot_of_honeycomb_frame_512.webp"
          alt="close shot honey comb"
        />
        <img
          class="absolute top-1/5 left-50 w-[300px] h-[300px] mask-[url(/svg/hexagonal-svgrepo-com.svg)]"
          src="/images/bee_on_flower_512.webp"
          alt="bee on flower"
        />
        <img
          class="absolute bottom-0 left-5 w-[220px] h-[220px] mask-[url(/svg/hexagonal-svgrepo-com.svg)]"
          src="/images/Man_holding_honeycomb_frame_512.webp"
          alt="man holding honey comb"
        />
      </div>
    </div>

    <!-- right -->
    <div class="flex justify-end">
      <form
        @submit.prevent="handleContactForm"
        class="flex flex-col gap-4 bg-black p-8 w-3/4 rounded-2xl bg-honey-glow/10 mt-2"
      >
        <NuxtLink
          to="/"
          class="flex w-fit gap-1 text-sm text-honey hover:text-honey-glow transition-all duration-300"
        >
          <span>-></span>
          <span>Return To Home</span>
        </NuxtLink>
        <div class="flex flex-col gap-5">
          <div class="flex flex-col gap-1">
            <label class="text-bold uppercase text-sm" for="full-name-input"
              >Full Name
              <span
                v-if="!formData.fullName.length > 0"
                class="text-[0.7rem] text-orange-200 lowercase"
                >Empty</span
              ></label
            >
            <input
              id="full-name-input"
              type="text"
              v-model="formData.fullName"
              placeholder="Enter your full name..."
              class="border-1 border-white p-2 rounded-lg text-honey-glow"
            />
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-bold uppercase text-sm" for="email-input"
              >Email
              <span
                v-if="!formData.email.length > 0"
                class="text-[0.7rem] text-orange-200 lowercase"
                >Empty</span
              ></label
            >
            <input
              id="email-input"
              type="text"
              v-model="formData.email"
              placeholder="Enter your full name..."
              class="border-1 border-white p-2 rounded-lg text-honey-glow"
            />
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-bold uppercase text-sm" for="message-input"
              >Message
              <span
                v-if="!formData.message.length > 0"
                class="text-[0.7rem] text-orange-200 lowercase"
                >Empty</span
              ></label
            >
            <textarea
              id="message-input"
              rows="3"
              type="text"
              v-model="formData.message"
              placeholder="Enter your full name..."
              class="border-1 border-white p-2 rounded-lg text-honey-glow"
            />
          </div>
        </div>

        <UiButton
          type="submit"
          class="bg-honey hover:bg-honey-glow text-honey-glow hover:text-honey font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-honey/20 cursor-pointer"
        >
          Send
        </UiButton>
      </form>
    </div>
  </div>
</template>
