﻿// Copyright © 2015 Dmitry Sikorsky. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System.Collections.Generic;
using Platformus.Infrastructure;

namespace Platformus.Barebone
{
  public class BackendMetadata : IBackendMetadata
  {
    public IEnumerable<BackendStyleSheet> BackendStyleSheets
    {
      get
      {
        return new BackendStyleSheet[]
        {
          new BackendStyleSheet("/wwwroot.areas.backend.css.platformus.barebone.min.css", 1000),
          new BackendStyleSheet("http://fonts.googleapis.com/css?family=PT+Sans:400,400italic&subset=latin,cyrillic", 10000)
        };
      }
    }

    public IEnumerable<BackendScript> BackendScripts
    {
      get
      {
        return new BackendScript[]
        {
          new BackendScript("/lib/jquery/jquery.min.js", 100),
          new BackendScript("/lib/jquery-validation/jquery.validate.min.js", 200),
          new BackendScript("/lib/jquery-validation-unobtrusive/jquery.validate.unobtrusive.min.js", 300),
          new BackendScript("/lib/tinymce/tinymce.min.js", 400),
          new BackendScript("/wwwroot.areas.backend.js.platformus.barebone.min.js", 1000)
        };
      }
    }

    public IEnumerable<BackendMenuGroup> BackendMenuGroups
    {
      get
      {
        return null;
      }
    }
  }
}