const dir = {
	src: 'assets/src/',
	dist: 'assets/dist/',
};

const config = {
	html: {
		src: '*.html',
	},
	css: {
		src: {
			flexboxgrid: `${dir.src}scss/flexboxgrid/flexboxgrid.scss`,
			debug: `${dir.src}scss/flexboxgrid/flexboxgrid-debug.scss`,
			split: `${dir.src}scss/flexboxgrid/split/*.scss`,
			demo: `${dir.src}scss/demo.scss`,
			base: `${dir.src}scss/`,
		},
		watch: `${dir.src}scss/**/*.scss`,
		lint: `${dir.src}scss/**/*.scss`,
		dest: `${dir.dist}css/`,
	},
};

export { dir, config };