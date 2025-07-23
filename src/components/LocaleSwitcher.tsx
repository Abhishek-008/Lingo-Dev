
'use client'; // This directive marks the component as a Client Component

import React from 'react';
import { LocaleSwitcher } from "lingo.dev/react/client";

export function LanguageSwitcher() {
  const supportedLocales = ["en", "es", "ja","hi","ar","uz","te"];

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-700">Language:</span>
      {/* Removed className and activeClassName as they are not supported props by lingo.dev's LocaleSwitcher */}
      <LocaleSwitcher
        locales={supportedLocales}
      />
    </div>
  );
}
