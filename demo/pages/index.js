import React from 'react';
import Head from 'next/head';
import { Container, Header, Segment } from 'semantic-ui-react';
import Example from '../examples/Example';
import SimpleList from '../examples/SimpleList';
import SemanticTable from '../examples/SemanticTable';

const Index = () => (
  <div>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css" />
      <style>{'body { background-color: #f8f8f8; }'}</style>
    </Head>
    <Container fluid>
      <Segment inverted vertical color="blue" padded="very" textAlign="center" className="index-segment">
        <Header size="huge">react-item-select</Header>
        <Header size="medium">A React component that takes away the pain of managing item selection state in tables and lists</Header>
      </Segment>
      <Example title="Table" {...SemanticTable} />
      <Example title="Simple List" {...SimpleList} />
    </Container>
    <style jsx global>{`
      .index-segment {
        margin-bottom: 48px !important;
      }
    `}
    </style>
  </div>
);

export default Index;
