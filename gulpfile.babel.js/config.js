const dir = {
	src: 'assets/src/',
	dist: 'assets/dist/'
};

const config = {
	html: {
		src: '*.html'
	},
	css: {
		src: [`${dir.src}scss/flexboxgrid.scss`, `${dir.src}scss/homeview.scss`],
		watch: `${dir.src}scss/**/*.scss`,
		lint: [`${dir.src}scss/**/*.scss`, `!${dir.src}scss/vendors/**/*.scss`],
		dest: `${dir.dist}css/`
	}
};

export { dir, config };
