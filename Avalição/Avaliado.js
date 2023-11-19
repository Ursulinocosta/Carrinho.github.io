
        function addComment() {
            var name = document.getElementById('name').value;
            var rating = document.querySelector('input[name="rating"]:checked').value;
            var commentText = document.getElementById('comment').value;

            var commentsContainer = document.getElementById('comments-container');
            var commentList = commentsContainer.querySelector('ul');

            var commentItem = document.createElement('li');
            commentItem.className = 'comment';
            commentItem.innerHTML = '<strong>' + name + '</strong> - ' + 'Avaliação: ' + rating + ' estrelas<br>' + commentText;

            commentList.appendChild(commentItem);

            // Limpar campos do formulário
            document.getElementById('add-comment-form').reset();

            // Atualizar a classificação média e a barra de progresso
            updateAverageRating();
        }

        function updateAverageRating() {
            var ratings = document.querySelectorAll('input[name="rating"]');
            var totalRating = 0;

            ratings.forEach(function (rating) {
                totalRating += parseInt(rating.value);
            });

            var averageRating = totalRating / ratings.length;

            var starIcons = document.querySelectorAll('#average-rating .fa-star');
            starIcons.forEach(function (star, index) {
                if (index < Math.round(averageRating)) {
                    star.classList.add('checked');
                } else {
                    star.classList.remove('checked');
                }
            });

            // Atualizar a barra de progresso
            var progressBar = document.getElementById('progress-bar');
            progressBar.style.width = (averageRating / 5) * 100 + '%';
        }


