<template>
    <div class="w-fit flex gap-[114px] mt-[15px] mx-auto bg-transparent">
        <div class="w-[178px] h-[58px] ">
            <img src="/assets/img/logo.svg" class="object-contain w-full h-full"/>
        </div>
        <div class="flex justify-center items-center gap-[45px] py-[6px] px-[8px] box-border rounded-[46px] bg-[#A0A0A033] backdrop-blur-[2px] z-10">
            <div v-for="connector in connectors" :key="connector.name" class="relative px-[25px] rounded-[48px] h-[46px] text-[#404040] text-[16px] font-['Quicksand'] leading-[46px] text-center font-[700] select-none hover:bg-[#010101] hover:text-[#FFAC03]" @click="() => connect({ connector })">
                <div>{{ connector.name }}</div>
            </div>
        </div>
        <div class="relative w-[148px] h-[58px] rounded-lg bg-[#FABD00] text-black text-[16px] leading-[60px] select-none text-center font-normal uppercase font-['Vendin']">{{ account.address }}</div>
    </div>
</template>

<script setup>

const account = useAccount()
const { disconnect } = useDisconnect()
const { connectors, connect, status, error } = useConnect()

console.log(account)

</script>