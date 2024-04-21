from typing import Literal
from uuid import uuid4
from pydantic import BaseModel, Field

class Node(BaseModel):
  """A Node of the Diagram"""
  id: int
  label: str
  # color: str = Field("blue", description="colour name for the edge e.g. red, blue etc.")
  shape: Literal['dot','ellipse','box','hexagon','diamond'] = Field(
    "dot",
    description="Best shape based on the node type"
  )


class Edge(BaseModel):
  """An Edge of the Diagram"""
  id: str = Field(default_factory=lambda: str(uuid4()))
  source: int = Field(
    ...,
    description="Int id of the source node",
    serialization_alias="from"
  )
  target: int = Field(
    ...,
    description="Int id of the target node",
    serialization_alias="to"
  )
  label: str


class Diagram(BaseModel):
  """A very comprehensive and detailed diagram to fully understand the given topic"""

  nodes: list[Node] = Field(..., default_factory=list)
  edges: list[Edge] = Field(..., default_factory=list)