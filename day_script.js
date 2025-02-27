        document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("popup").classList.add("active");
            loadCheckboxStates();
        });

        function closePopup() {
            document.getElementById("popup").classList.remove("active");
        }

        function saveCheckboxState(id) {
            let checkbox = document.getElementById(id);
            localStorage.setItem(id, checkbox.checked);
        }

        function loadCheckboxStates() {
            let checkboxes = document.querySelectorAll("input[type='checkbox']");
            checkboxes.forEach(checkbox => {
                let savedState = localStorage.getItem(checkbox.id);
                if (savedState !== null) {
                    checkbox.checked = savedState === "true";
                }
            });
        }
    