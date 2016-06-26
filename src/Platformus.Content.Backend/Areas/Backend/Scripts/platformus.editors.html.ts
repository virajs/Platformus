﻿// Copyright © 2015 Dmitry Sikorsky. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

/// <reference path="../../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../../scripts/typings/platformus/platformus.ui.d.ts" />

module Platformus.Editors.Html {
  export function create(container: JQuery, member: any): void {
    createField(container, member);
  }

  function createField(container: JQuery, member: any): JQuery {
    var field = $("<div>").addClass("field").appendTo(container);

    createLabel(member).appendTo(field);

    if (member.isPropertyLocalizable) {
      member.property.localizations.forEach(
        (localization, index) => {
          if (localization.culture.code != "__") {
            createCulture(localization).appendTo(field);
            createTextArea(member, localization).appendTo(field);
            Platformus.Ui.initializeTinyMce("propertyMember" + member.id + localization.culture.code);

            if (index != member.property.localizations.length - 1) {
              createMultilingualSeparator().appendTo(field);
            }
          }
        }
      );
    }

    else {
      member.property.localizations.forEach(
        (localization, index) => {
          if (localization.culture.code == "__") {
            createTextArea(member, localization).appendTo(field);
            Platformus.Ui.initializeTinyMce("propertyMember" + member.id + localization.culture.code);
          }
        }
      );
    }

    return field;
  }

  function createLabel(member: any): JQuery {
    return $("<label>").html(member.name);
  }

  function createTextArea(member: any, localization: any): JQuery {
    var identity = "propertyMember" + member.id + localization.culture.code;

    return $("<textarea>").attr("id", identity).attr("name", identity).html(localization.value);
  }

  function createCulture(localization: any): JQuery {
    var culture = $("<div>").addClass("culture").addClass("multiline");

    createFlag(localization).appendTo(culture);
    return culture;
  }

  function createFlag(localization: any): JQuery {
    return $("<div>").addClass("flag").html(localization.culture.code);
  }

  function createMultilingualSeparator(): JQuery {
    return $("<div>").addClass("multilingual-separator");
  }
}