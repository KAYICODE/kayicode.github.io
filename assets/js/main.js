document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("bg-primary", "text-white", "shadow-xl", "backdrop-blur-md");
        } else {
            navbar.classList.remove("bg-primary", "text-white", "shadow-xl", "backdrop-blur-md");
        }
    });
});

AFRAME.registerComponent('modify-materials', {
    init: function () {
        // Wait for model to load.
        this.el.addEventListener('model-loaded', () => {
            // Grab the mesh / scene.
            const obj = this.el.getObject3D('mesh');
            // Go over the submeshes and modify materials we want.
            obj.traverse(node => {
                if (node.name.indexOf('ship') !== -1) {
                    node.material.color.set('red');
                }
            });
        });
    }
});