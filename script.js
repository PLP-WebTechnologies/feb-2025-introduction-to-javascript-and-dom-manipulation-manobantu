// script.js	
        // Text Manipulation
        document.getElementById('change-text-btn').addEventListener('click', function() {
            document.getElementById('dynamic-text').textContent = 'The text has been changed!';
        });

        // Style Modification
        document.getElementById('change-color-btn').addEventListener('click', function() {
            document.getElementById('style-demo').style.color = 'orange';
        });

        document.getElementById('change-size-btn').addEventListener('click', function() {
            document.getElementById('style-demo').style.fontSize = '30px';
        });

        document.getElementById('add-highlight-btn').addEventListener('click', function() {
            document.getElementById('style-demo').classList.toggle('highlight');
        });

        // Element Addition & Removal
        const list = document.getElementById('dynamic-list');

        document.getElementById('add-element-btn').addEventListener('click', function() {
            const newItem = document.createElement('li');
            newItem.textContent = 'New item added!';
            list.appendChild(newItem);
        });

        document.getElementById('remove-element-btn').addEventListener('click', function() {
            if (list.children.length > 0) {
                list.removeChild(list.lastChild);
            }
        })

        
