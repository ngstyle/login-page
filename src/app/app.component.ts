import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

    ($('.js-tilt') as any).tilt({
      scale: 1.1
    });

    const input = $('.validate-input .input100');
    $('.validate-form').on('submit', () => {
      let check = true;

      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < input.length; i++) {
        if (!this.validate(input[i])) {
          this.showValidate(input[i]);
          check = false;
        }
      }

      return check;
    });


    $('.validate-form .input100').each(function() {
      $(this).focus(() => {
        $(this).parent().removeClass('alert-validate');
      });
    });

  }

  validate(input) {
    if ($(input).attr('type') == 'email' || $(input).attr('name') === 'email') {
      // tslint:disable-next-line: max-line-length
      if (($(input).val() as string).trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        return false;
      }
    } else {
      if (($(input).val() as string).trim() === '') {
        return false;
      }
    }

    return true;
  }

  showValidate(input) {
    const thisAlert = $(input).parent();
    $(thisAlert).addClass('alert-validate');
  }

}
