<script lang="ts">
  import { Baby, Activity, Mail } from "lucide-svelte";
  import { base } from "$app/paths";
</script>

<footer class="border-t bg-background">
  <div class="container mx-auto px-4 py-12 md:py-16">
    <div class="grid grid-cols-1 gap-12 md:grid-cols-4">
      <div class="col-span-1 md:col-span-2 space-y-4">
        <div class="flex items-center space-x-2">
          <Baby class="h-6 w-6 text-primary" />
          <span class="font-bold text-xl">BabyDaily</span>
        </div>
        <p class="text-muted-foreground text-sm max-w-xs">
          Empowering parents with real-time baby tracking. A proud product of <span class="font-semibold text-foreground">OrdesaHub</span>.
        </p>
        <div class="flex space-x-4 pt-2">
          <a href="mailto:arefsn89@gmail.com" class="text-muted-foreground hover:text-primary transition-colors">
            <Mail class="h-5 w-5" />
          </a>
        </div>
      </div>
      
      <div>
        <h3 class="font-bold mb-4 text-sm uppercase tracking-wider">Product</h3>
        <ul class="space-y-3 text-sm">
          <li><a href="{base}/#features" class="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
          <li><a href="{base}/#about" class="text-muted-foreground hover:text-primary transition-colors">About</a></li>
          <li><a href="{base}/babydaily/privacy/" class="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
          <li><a href="{base}/babydaily/terms/" class="text-muted-foreground hover:text-primary transition-colors">Terms of Use</a></li>
        </ul>
      </div>
      
      <div>
        <h3 class="font-bold mb-4 text-sm uppercase tracking-wider">Company</h3>
        <ul class="space-y-3 text-sm">
          <li><span class="text-muted-foreground">OrdesaHub</span></li>
          <li><a href="https://ordesahub.com" class="text-muted-foreground hover:text-primary transition-colors underline underline-offset-4">ordesahub.com</a></li>
          <li><a href="{base}/#about" class="text-muted-foreground hover:text-primary transition-colors">About</a></li>
          <li><a href="mailto:arefsn89@gmail.com" class="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
        </ul>
      </div>
    </div>
    
    <div class="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
      <div class="flex items-center">
        <Activity class="h-3 w-3 mr-1" />
        <span>&copy; 2026 OrdesaHub. All rights reserved.</span>
      </div>
      <div class="flex space-x-6">
        <a href="{base}/babydaily/privacy/" class="hover:text-primary transition-colors">Privacy</a>
        <a href="{base}/babydaily/terms/" class="hover:text-primary transition-colors">Terms</a>
      </div>
    </div>
  </div>
</footer>
