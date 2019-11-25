$(function () {
    $('#js-shopping-list-form').submit(function (e) {
        e.preventDefault();
        let value = $(this).find('#shopping-list-entry').val();
        $('.shopping-list').append(`<li>
        <span class="shopping-item">${value}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
        $(this).find('#shopping-list-entry').val('');
    });

    let shoppingList = $('.shopping-list');

    // this aint working :( 
    shoppingList.on('click', '.shopping-item-toggle', function () {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

    shoppingList.on('click', '.shopping-item-delete', function () {
        $(this).closest('li').remove();
    });
});