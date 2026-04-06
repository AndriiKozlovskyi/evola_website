<template>
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-24">

    <!-- Page Header -->
    <div class="text-center mb-16">
      <div class="label-pill mb-5 inline-flex">
        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        {{$t(`kits.pageKicker`)}}
      </div>
      <h1 class="text-3xl sm:text-5xl font-black mb-4" style="color: var(--text-1);">
        {{$t(`kits.title`)}}
      </h1>
      <p class="text-lg text-[#8fa3bb] mb-2">{{$t(`kits.subtitle`)}}</p>
      <p class="text-sm text-[#566a7f]">{{$t(`kits.selectKit`)}}</p>
    </div>

    <!-- Kit Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

      <!-- Lite Kit -->
      <div class="card-premium rounded-3xl overflow-hidden flex flex-col">
        <div class="relative bg-[#0d1626] p-6 flex items-center justify-center" style="min-height: 220px;">
          <div class="absolute inset-0" style="background: radial-gradient(ellipse at center, rgba(240,91,4,0.07) 0%, transparent 70%);"></div>
          <img src="/assets/con250.webp" alt="LITE Kit" class="relative max-h-48 w-auto object-contain" onerror="this.src='https://placehold.co/600x400?text=LITE+Kit'" />
        </div>
        <div class="p-6 flex flex-col flex-1 gap-4">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-black text-white">{{$t(`bicycleCompose.kits.lite.label`)}}</h2>
            <span class="label-pill text-xs">250W</span>
          </div>
          <div class="grid grid-cols-3 gap-2">
            <div class="spec-badge text-center"><div class="text-[10px] text-[#566a7f] mb-1">{{$t(`kits.specPower`)}}</div><div class="text-sm font-bold text-white">250W</div></div>
            <div class="spec-badge text-center"><div class="text-[10px] text-[#566a7f] mb-1">{{$t(`kits.specSpeed`)}}</div><div class="text-sm font-bold text-white">25 {{$t(`common.speed`)}}</div></div>
            <div class="spec-badge text-center" style="border-color: rgba(240,91,4,0.25); background: rgba(240,91,4,0.06);"><div class="text-[10px] text-[#f05b04]/60 mb-1">{{$t(`kits.specRange`)}}</div><div class="text-sm font-bold text-[#f05b04]">100 {{$t(`common.range`)}}</div></div>
          </div>
          <p class="text-sm text-[#8fa3bb] flex-1">{{ $t(`kits.liteTitle`) }}</p>
          <div class="flex items-center justify-between pt-4" style="border-top: 1px solid var(--border);">
            <div class="text-2xl font-black text-white">2600 <span class="text-base text-[#8fa3bb]">PLN</span></div>
            <Button variant="primary" @click="navigateTo(`/configure-kit?type=lite`)">{{$t(`kits.orderLabel`)}}</Button>
          </div>
        </div>
      </div>

      <!-- Base Kit — Featured -->
      <div class="card-accent rounded-3xl overflow-hidden flex flex-col" style="border-color: rgba(240,91,4,0.35);">
        <div class="relative p-6 flex items-center justify-center" style="min-height: 220px; background: linear-gradient(135deg, rgba(240,91,4,0.1) 0%, rgba(240,91,4,0.04) 100%);">
          <div class="absolute top-4 right-4"><span class="text-[10px] font-black uppercase tracking-widest text-white bg-[#f05b04] px-2.5 py-1 rounded-full">{{$t(`kits.popularBadge`)}}</span></div>
          <img src="/assets/con500.webp" alt="BASE Kit" class="relative max-h-48 w-auto object-contain" onerror="this.src='https://placehold.co/600x400?text=BASE+Kit'" />
        </div>
        <div class="p-6 flex flex-col flex-1 gap-4">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-black text-white">{{$t(`bicycleCompose.kits.base.label`)}}</h2>
            <span class="label-pill text-xs">500W</span>
          </div>
          <div class="grid grid-cols-3 gap-2">
            <div class="spec-badge text-center"><div class="text-[10px] text-[#566a7f] mb-1">{{$t(`kits.specPower`)}}</div><div class="text-sm font-bold text-white">500W</div></div>
            <div class="spec-badge text-center"><div class="text-[10px] text-[#566a7f] mb-1">{{$t(`kits.specSpeed`)}}</div><div class="text-sm font-bold text-white">40 {{$t(`common.speed`)}}</div></div>
            <div class="spec-badge text-center" style="border-color: rgba(240,91,4,0.25); background: rgba(240,91,4,0.06);"><div class="text-[10px] text-[#f05b04]/60 mb-1">{{$t(`kits.specRange`)}}</div><div class="text-sm font-bold text-[#f05b04]">70 {{$t(`common.range`)}}</div></div>
          </div>
          <p class="text-sm text-[#8fa3bb] flex-1">{{ $t(`kits.baseTitle`) }}</p>
          <div class="flex items-center justify-between pt-4" style="border-top: 1px solid rgba(240,91,4,0.2);">
            <div class="text-2xl font-black text-white">3200 <span class="text-base text-[#8fa3bb]">PLN</span></div>
            <Button variant="primary" @click="navigateTo(`/configure-kit?type=base`)">{{$t(`kits.orderLabel`)}}</Button>
          </div>
        </div>
      </div>

      <!-- Turbo Kit -->
      <div class="card-premium rounded-3xl overflow-hidden flex flex-col">
        <div class="relative bg-[#0d1626] p-6 flex items-center justify-center" style="min-height: 220px;">
          <div class="absolute inset-0" style="background: radial-gradient(ellipse at center, rgba(240,91,4,0.07) 0%, transparent 70%);"></div>
          <img src="/assets/con3000.webp" alt="TURBO Kit" class="relative max-h-48 w-auto object-contain" onerror="this.src='https://placehold.co/600x400?text=TURBO+Kit'" />
        </div>
        <div class="p-6 flex flex-col flex-1 gap-4">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-black text-white">{{$t(`bicycleCompose.kits.turbo.label`)}}</h2>
            <span class="label-pill text-xs">3000W</span>
          </div>
          <div class="grid grid-cols-3 gap-2">
            <div class="spec-badge text-center"><div class="text-[10px] text-[#566a7f] mb-1">{{$t(`kits.specPower`)}}</div><div class="text-sm font-bold text-white">3000W</div></div>
            <div class="spec-badge text-center"><div class="text-[10px] text-[#566a7f] mb-1">{{$t(`kits.specSpeed`)}}</div><div class="text-sm font-bold text-white">70 {{$t(`common.speed`)}}</div></div>
            <div class="spec-badge text-center" style="border-color: rgba(240,91,4,0.25); background: rgba(240,91,4,0.06);"><div class="text-[10px] text-[#f05b04]/60 mb-1">{{$t(`kits.specRange`)}}</div><div class="text-sm font-bold text-[#f05b04]">70 {{$t(`common.range`)}}</div></div>
          </div>
          <p class="text-sm text-[#8fa3bb] flex-1">{{ $t(`kits.turboTitle`) }}</p>
          <div class="flex items-center justify-between pt-4" style="border-top: 1px solid var(--border);">
            <div class="text-2xl font-black text-white">4500 <span class="text-base text-[#8fa3bb]">PLN</span></div>
            <Button variant="primary" @click="navigateTo(`/configure-kit?type=turbo`)">{{$t(`kits.orderLabel`)}}</Button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import Button from '~/components/ui/Button.vue'
import { navigateTo } from '#app'
useHead({
  title: 'Zestawy do konwersji roweru na elektryczny | Evola E-bicycles',
  meta: [
    { name: 'description', content: 'Profesjonalne zestawy do konwersji roweru na elektryczny. Dostepne moce: 250W, 500W, 3000W. Zasieg do 100km. Gwarancja 12 miesiecy.' }
  ]
})
</script>
