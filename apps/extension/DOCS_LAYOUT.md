# CalmWeb Layout System

This document describes the reusable layout and UI components available in the extension.

## Component Imports

All components should be imported from `@components`:

```tsx
import { Container, Card, Header, PageLayout } from '@components';
```

## Layout Components

### Container

A responsive container for wrapping page content.

```tsx
<Container size="md" padding="md" center={true}>
  {/* Content */}
</Container>
```

- `size`: `sm` (320px), `md` (2xl), `lg` (4xl), `xl` (6xl), `full`
- `padding`: `none`, `sm`, `md`, `lg`

### PageLayout

The primary wrapper for top-level pages (Popup, Options).

```tsx
<PageLayout
  header={<Header title="My Page" />}
  footer={<Footer>Footer Content</Footer>}
>
  <Container>
    {/* Main Content */}
  </Container>
</PageLayout>
```

### Card

A content card with different visual variants.

```tsx
<Card variant="default" padding="md" hover={true}>
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>
```

- `variant`: `default` (border + bg), `outline` (border only), `muted` (subtle bg)

### Tabs

A tabbed interface for organizing content.

```tsx
<Tabs defaultValue="general">
  <TabList>
    <TabTrigger value="general">General</TabTrigger>
    <TabTrigger value="advanced">Advanced</TabTrigger>
  </TabList>
  <TabContent value="general">General Settings</TabContent>
  <TabContent value="advanced">Advanced Settings</TabContent>
</Tabs>
```

## Form Components

### FormField

Wraps an input with a label and optional description/error.

```tsx
<FormField 
  label="API Key" 
  description="Your LLM provider API key"
  error={error}
  required
>
  <input type="text" />
</FormField>
```

### FormRow & FormActions

```tsx
<FormRow>
  <FormField label="First Name"><input /></FormField>
  <FormField label="Last Name"><input /></FormField>
</FormRow>

<FormActions align="right">
  <button>Cancel</button>
  <button>Save</button>
</FormActions>
```

## UI Components

### Switch

A toggle switch component.

```tsx
<Switch 
  checked={enabled} 
  onCheckedChange={(checked) => setEnabled(checked)} 
/>
```

### Spinner

An animated loading indicator.

```tsx
<Spinner size="md" />
```

### Skeleton

A placeholder for loading states.

```tsx
<Skeleton className="h-4 w-full" />
<Skeleton className="h-10 w-10 rounded-full" />
```
