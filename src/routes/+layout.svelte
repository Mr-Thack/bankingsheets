<script>
  import "../app.css";
</script>

<div class="min-h-screen bg-gray-50">
  <header class="bg-blue-700 text-white p-4">
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold">Bank Balance Sheet Simulation</h1>
    </div>
  </header>
  
  <main>
    <slot />
  </main>
  
  <footer class="bg-gray-100 p-4 mt-8">
    <div class="container mx-auto text-center text-gray-600">
      AP Macroeconomics Bank Balance Sheet Simulator
    </div>
  </footer>
</div>
