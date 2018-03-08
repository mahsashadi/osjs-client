/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2018, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */

import CoreServiceProvider from './core';
import PackageServiceProvider from './packages';
import DesktopServiceProvider from './desktop';
import NotificationServiceProvider from './notifications';
import VFSServiceProvider from './vfs';
import ThemeServiceProvider from './theme';
import SessionServiceProvider from './session';
import LoginServiceProvider from './login';
import ServiceProvider from '../service-provider';

/**
 * OS.js Default Service Provider
 *
 * Provides all default services
 */
export default class DefaultServiceProvider extends ServiceProvider {

  constructor(core) {
    super(core);

    this.core.register(CoreServiceProvider);
    this.core.register(PackageServiceProvider);
    this.core.register(DesktopServiceProvider);
    this.core.register(VFSServiceProvider);
    this.core.register(ThemeServiceProvider);
    this.core.register(NotificationServiceProvider);
    this.core.register(SessionServiceProvider);
    this.core.register(LoginServiceProvider, {
      before: true
    });
  }

}
