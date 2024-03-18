import { t } from '../../../../setup/styles';
import { Section } from '../Section';
import {
  Column,
  Icon,
  Row,
  ScrollPage,
  Tag,
} from '../../../../design/primitives';
import { PaletteCard, PaletteItem } from '../Palette';
import { buttonComponentData } from './componentData';
import { Heading, Text, Title } from '../../../../design/typography';
import { useState } from 'react';
import { isMobile } from '../../../../setup/helpers';
import { Pressable } from 'react-native';

export const Components = () => {
  return (
    <ScrollPage>
      <Section
        title="Components"
        icon="cubes"
        color={[t.tabBlue, t.tabBlueFaded]}
      >
        <ComponentAccordian data={buttonComponentData} title="Buttons" />
        <ComponentAccordian data={buttonComponentData} title="Chips" />
        {/* <ComponentAccordian data={buttonComponentData} title="Icons" />
        <ComponentAccordian data={buttonComponentData} title="Inputs" />
        <ComponentAccordian data={buttonComponentData} title="Images" />
        <ComponentAccordian data={buttonComponentData} title="Cards" />
        <ComponentAccordian data={buttonComponentData} title="Modals" />
        <ComponentAccordian data={buttonComponentData} title="Toasts" /> */}
        {/* <ComponentAccordian data={buttonComponentData} title="Tabs" />
        <ComponentAccordian
          data={buttonComponentData}
          title="Nav / Breadcrumbs"
        />
        <ComponentAccordian data={buttonComponentData} title="Lists" />
        <ComponentAccordian data={buttonComponentData} title="Tables" />
        <ComponentAccordian data={buttonComponentData} title="Pagination" />
        <ComponentAccordian data={buttonComponentData} title="Progress" />
        <ComponentAccordian data={buttonComponentData} title="Loaders" />
        <ComponentAccordian data={buttonComponentData} title="Sliders" />
        <ComponentAccordian data={buttonComponentData} title="Carousels" />
        <ComponentAccordian data={buttonComponentData} title="Timelines" />
        <ComponentAccordian data={buttonComponentData} title="Calendars" />
        <ComponentAccordian data={buttonComponentData} title="Charts" />
        <ComponentAccordian data={buttonComponentData} title="Maps" />
        <ComponentAccordian data={buttonComponentData} title="Media" />
        <ComponentAccordian data={buttonComponentData} title="Avatars" />
        <ComponentAccordian data={buttonComponentData} title="Popovers" />
        <ComponentAccordian data={buttonComponentData} title="Dropdowns" />
        <ComponentAccordian data={buttonComponentData} title="Menus" /> */}
      </Section>
    </ScrollPage>
  );
};

const ComponentAccordian = ({ data, title }: { data: any; title: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Pressable onPress={() => setOpen(!open)}>
        <Title
          style={{
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {title}
          <Icon
            name={open ? 'chevron-up' : 'chevron-down'}
            size={isMobile ? t.l : t.xl}
            style={{ marginLeft: isMobile ? t.m : t.l }}
          />
        </Title>
      </Pressable>

      {open && (
        <>
          <Heading style={{ marginBottom: t.xl }}>
            Props (
            <PropTitle
              prop={{
                name: 'name',
                type: 'type',
                defaultValue: 'default',
              }}
            />
            )
          </Heading>
          <Column style={{ gap: t.xs }}>
            {data.props &&
              data.props.map(
                (prop: {
                  name: string;
                  type: string;
                  defaultValue: string;
                  description: string;
                }) => <PropEntry prop={prop} />
              )}
          </Column>
          <Heading style={{ marginTop: t.l }}>Examples</Heading>
          <Column
            style={{
              alignItems: 'flex-start',
              gap: t.l,
              marginBottom: t.l,
            }}
          >
            {Object.keys(data.examples).map((component) => (
              <PaletteCard
                heading={component}
                key={component}
                description={data.examples[component][0].description}
                code={data.examples[component][0].code}
              >
                {data.examples[component as keyof typeof data.examples].map(
                  (variant: any) => (
                    <PaletteItem label={variant.label} key={variant.label}>
                      {variant.component}
                    </PaletteItem>
                  )
                )}
              </PaletteCard>
            ))}
          </Column>
        </>
      )}
    </>
  );
};

const PropEntry: React.FC<{ prop: any }> = ({ prop }) => {
  return (
    <>
      <PropTitle prop={prop} />
      <Row style={{ marginBottom: t.l }}>
        <Text>{prop.description}</Text>
      </Row>
    </>
  );
};

const PropTitle: React.FC<{ prop: any }> = ({ prop }) => {
  return (
    <Row style={{ gap: t.xs }}>
      <Tag
        style={{
          fontSize: t.m,
          backgroundColor: t.tabPurpleFaded,
          color: t.tabPurple,
        }}
      >
        {prop.name}
      </Tag>
      <Text>-</Text>
      <Text mono={true} style={{ color: t.tabGreen }}>
        {prop.type}
      </Text>
      <Text>-</Text>
      <Text mono={true} style={{ color: t.tabBlue }}>
        {prop.defaultValue}
      </Text>
    </Row>
  );
};
