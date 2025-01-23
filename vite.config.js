import {defineConfig} from "vite"

export default defineConfig({
	plugins: [
		
	],
	// build: {
	// 	target: 'esnext'
	//   },
	    optimizeDeps: {
    exclude: ['@xenova/transformers']
  }
})