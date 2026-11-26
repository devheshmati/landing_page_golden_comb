<script setup lang="ts">
import { reactive } from "vue";

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
    toast.warning("Warning", "Email format is not valid");
    return;
  }

  try {
    const { status, message } = await $fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (status === 200) {
      toast.success("Success", "Email sent successfully.");
      resetForm();
      return;
    }

    throw createError(message || "Request failed");
  } catch (e) {
    toast.error("Error", `Submit form failed!`);
  }
};
</script>

<template>
  <div
    class="page relative min-h-screen w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center"
  >
    <!-- Left Section: Brand Title & Honeycomb Images -->
    <div class="relative flex flex-col items-center lg:items-start">
      <!-- Title: در موبایل بالا و وسطچین، در دسکتاپ در جایگاه دقیق قبلی -->
      <NuxtLink
        to="/"
        class="lg:absolute lg:left-[45%] lg:top-2 flex flex-col items-center lg:items-start text-center lg:text-left text-3xl sm:text-4xl text-honey uppercase opacity-90 hover:opacity-100 hover:drop-shadow-[0_0_10px_theme(colors.honey),0_10px_8px_rgb(0_0_0/0.15)] cursor-pointer z-20 transition-all duration-300 mb-6 lg:mb-0"
      >
        <div class="font-bold tracking-wide">Golden Comb</div>
        <div class="text-honey-glow font-bold tracking-wide">Bee Farm</div>
      </NuxtLink>

      <!-- Honeycomb Image Cells -->
      <!-- در موبایل به صورت فلکس کنار هم و در دسکتاپ به صورت چیدمان لانه زنبوری -->
      <div
        class="relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-none h-[260px] sm:h-[340px] lg:h-[500px] mx-auto"
      >
        <!-- Top Left Hexagon -->
        <NuxtImg
          class="absolute top-0 left-2 sm:left-4 lg:top-0 lg:left-0 w-[125px] h-[125px] sm:w-[165px] sm:h-[165px] lg:w-[220px] lg:h-[220px] mask-[url(/svg/hexagonal-svgrepo-com.svg)] mask-contain mask-no-repeat mask-center"
          src="/images/Close_shot_of_honeycomb_frame_512.webp"
          alt="close shot honey comb"
          loading="lazy"
        />

        <!-- Center Right Hexagon (Main Bee) -->
        <NuxtImg
          class="absolute top-12 right-2 sm:top-16 sm:right-4 lg:top-[22%] lg:left-[42%] lg:right-auto w-[165px] h-[165px] sm:w-[220px] sm:h-[220px] lg:w-[290px] lg:h-[290px] mask-[url(/svg/hexagonal-svgrepo-com.svg)] mask-contain mask-no-repeat mask-center"
          src="/images/bee_on_flower_512.webp"
          alt="bee on flower"
          loading="lazy"
        />

        <!-- Bottom Left Hexagon -->
        <NuxtImg
          class="absolute bottom-0 left-6 sm:left-10 lg:bottom-0 lg:left-6 w-[125px] h-[125px] sm:w-[165px] sm:h-[165px] lg:w-[220px] lg:h-[220px] mask-[url(/svg/hexagonal-svgrepo-com.svg)] mask-contain mask-no-repeat mask-center"
          src="/images/Man_holding_honeycomb_frame_512.webp"
          alt="man holding honey comb"
          loading="lazy"
        />
      </div>
    </div>

    <!-- Right Section: Contact Form -->
    <div class="flex justify-center lg:justify-end w-full">
      <form
        @submit.prevent="handleContactForm"
        class="flex flex-col gap-5 p-6 sm:p-8 w-full max-w-md lg:max-w-lg rounded-2xl bg-honey-glow/10 backdrop-blur-sm border border-white/10 shadow-xl"
      >
        <NuxtLink
          to="/"
          class="flex items-center w-fit gap-1.5 text-sm text-honey hover:text-honey-glow transition-all duration-300"
        >
          <span>&rarr;</span>
          <span>Return To Home</span>
        </NuxtLink>

        <div class="flex flex-col gap-4">
          <!-- Full Name -->
          <div class="flex flex-col gap-1.5">
            <label
              class="font-semibold uppercase text-xs sm:text-sm flex items-center gap-2"
              for="full-name-input"
            >
              <span>Full Name</span>
              <span
                v-if="formData.fullName.length === 0"
                class="text-[0.7rem] text-orange-200/80 lowercase font-normal"
              >
                empty
              </span>
            </label>
            <input
              id="full-name-input"
              type="text"
              v-model="formData.fullName"
              placeholder="Enter your full name..."
              class="w-full border border-white/40 focus:border-honey focus:outline-none p-2.5 rounded-lg text-honey-glow bg-transparent transition-colors"
            />
          </div>

          <!-- Email -->
          <div class="flex flex-col gap-1.5">
            <label
              class="font-semibold uppercase text-xs sm:text-sm flex items-center gap-2"
              for="email-input"
            >
              <span>Email</span>
              <span
                v-if="formData.email.length === 0"
                class="text-[0.7rem] text-orange-200/80 lowercase font-normal"
              >
                empty
              </span>
            </label>
            <input
              id="email-input"
              type="email"
              v-model="formData.email"
              placeholder="Enter your email address..."
              class="w-full border border-white/40 focus:border-honey focus:outline-none p-2.5 rounded-lg text-honey-glow bg-transparent transition-colors"
            />
          </div>

          <!-- Message -->
          <div class="flex flex-col gap-1.5">
            <label
              class="font-semibold uppercase text-xs sm:text-sm flex items-center gap-2"
              for="message-input"
            >
              <span>Message</span>
              <span
                v-if="formData.message.length === 0"
                class="text-[0.7rem] text-orange-200/80 lowercase font-normal"
              >
                empty
              </span>
            </label>
            <textarea
              id="message-input"
              rows="4"
              v-model="formData.message"
              placeholder="Write your message here..."
              class="w-full border border-white/40 focus:border-honey focus:outline-none p-2.5 rounded-lg text-honey-glow bg-transparent transition-colors resize-none"
            />
          </div>
        </div>

        <UiButton
          type="submit"
          class="w-full bg-honey hover:bg-honey-glow text-honey-glow hover:text-honey font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-honey/20 cursor-pointer mt-2"
        >
          Send
        </UiButton>
      </form>
    </div>
  </div>
</template>
