# @zoo/ui

Accessible and customizable components for React, Vue, Svelte, and React Native. **Built on shadcn/ui with multi-framework support, 3D components, AI components, and advanced features.**

![hero](app/public/og.jpg)

## Features

- 🎯 **161+ Components** - 3x more than shadcn/ui
- 🌐 **Multi-Framework** - React, Vue, Svelte, React Native
- 🎨 **Two Themes** - Default & New York variants
- 🤖 **AI Components** - Chat, assistants, playground
- 🎮 **3D Components** - Interactive 3D elements
- ✨ **Animations** - Advanced motion components
- 🎛️ **Page Builder** - Visual drag-drop interface
- 🏷️ **White-Label** - Fork and rebrand easily
- 📦 **Blocks** - 24+ production-ready templates
- ♿ **Accessible** - Built with Radix UI primitives
- 🎭 **Customizable** - Tailwind CSS powered
- 📘 **TypeScript** - Fully typed

## Quick Start

### Installation

```bash
npm install @zoolabs/ui
# or
pnpm add @zoolabs/ui
```

### Usage

```tsx
import { Button, Card, Input } from '@zoolabs/ui'

export function App() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Welcome</Card.Title>
      </Card.Header>
      <Card.Content>
        <Input placeholder="Enter text..." />
      </Card.Content>
      <Card.Footer>
        <Button>Submit</Button>
      </Card.Footer>
    </Card>
  )
}
```

## Multi-Framework Support

```tsx
// React (default)
import { Button } from '@zoolabs/ui'

// Vue
import { Button } from '@zoolabs/ui/vue'

// Svelte
import { Button } from '@zoolabs/ui/svelte'

// React Native
import { Button } from '@zoolabs/ui/react-native'
```

## Documentation

📚 Visit **[ui.zoolabs.io](https://ui.zoolabs.io)** for:

- [Component Documentation](https://ui.zoolabs.io/docs/components)
- [Framework Guides](https://ui.zoolabs.io/docs/frameworks)
- [Installation Guide](https://ui.zoolabs.io/docs/installation)
- [Examples](https://ui.zoolabs.io/examples)
- [Page Builder](https://ui.zoolabs.io/builder)
- [Theme Generator](https://ui.zoolabs.io/theme-generator)

## CLI

Install components individually:

```bash
npx @zoolabs/ui add button
npx @zoolabs/ui add card dialog
```

## What's Different from shadcn/ui?

| Feature | shadcn/ui | @zoolabs/ui |
|---------|-----------|-----------|
| Components | 58 | **161** |
| Frameworks | React only | React, Vue, Svelte, React Native |
| 3D Components | ❌ | ✅ (9 components) |
| AI Components | ❌ | ✅ (12 components) |
| Page Builder | ❌ | ✅ |
| White-Label | ❌ | ✅ |
| Blocks | Limited | **24+ templates** |

## Packages

- `@zoolabs/ui` - Main UI library (161 components)
- `@zoolabs/auth` - Authentication components
- `@zoolabs/commerce` - E-commerce components
- `@zoolabs/brand` - Branding system

## Examples

```tsx
// 3D Components
import { ThreeDButton, ThreeDCard } from '@zoolabs/ui'

// AI Components
import { AIChat, AIAssistant } from '@zoolabs/ui'

// Animations
import { AnimatedBeam, AnimatedText } from '@zoolabs/ui'
```

## Development

```bash
# Clone repository
git clone https://github.com/zoo-labs/ui.git
cd ui

# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build packages
pnpm build

# Run tests
pnpm test
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md).

## License

MIT - See [LICENSE.md](./LICENSE.md) for details.

## Links

- [Documentation](https://ui.zoolabs.io)
- [GitHub](https://github.com/zoo-labs/ui)
- [npm](https://www.npmjs.com/package/@zoolabs/ui)
- [Discord](https://discord.gg/zoo)
- [Twitter](https://twitter.com/zoo_network)

---

Built with ❤️ by [Zoo Labs](https://zoo.ngo)
