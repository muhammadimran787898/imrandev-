"use client";

import * as React from "react";
import { ArrowRight, Link, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface TimelineItem {
  category: string;
  content: string;
  date: string;
  energy: number;
  icon: React.ElementType;
  id: number;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  title: string;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({ timelineData }: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = React.useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = React.useState(0);
  const [autoRotate, setAutoRotate] = React.useState(true);
  const [pulseEffect, setPulseEffect] = React.useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = React.useState<number | null>(null);
  const [isCompact, setIsCompact] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const orbitRef = React.useRef<HTMLDivElement>(null);
  const nodeRefs = React.useRef<Record<number, HTMLDivElement | null>>({});

  React.useEffect(() => {
    const checkCompact = () => setIsCompact(window.innerWidth <= 760);
    checkCompact();
    window.addEventListener("resize", checkCompact);
    return () => window.removeEventListener("resize", checkCompact);
  }, []);

  React.useEffect(() => {
    if (!autoRotate) {
      return;
    }

    const rotationTimer = window.setInterval(() => {
      setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)));
    }, 50);

    return () => window.clearInterval(rotationTimer);
  }, [autoRotate]);

  const getRelatedItems = React.useCallback(
    (itemId: number) => timelineData.find((item) => item.id === itemId)?.relatedIds ?? [],
    [timelineData],
  );

  const centerViewOnNode = React.useCallback(
    (nodeId: number) => {
      const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
      const targetAngle = (nodeIndex / timelineData.length) * 360;
      setRotationAngle(270 - targetAngle);
    },
    [timelineData],
  );

  const toggleItem = React.useCallback(
    (id: number) => {
      setExpandedItems((prev) => {
        const newState: Record<number, boolean> = {};
        Object.keys(prev).forEach((key) => {
          if (Number(key) !== id) {
            newState[Number(key)] = false;
          }
        });

        newState[id] = !prev[id];

        if (!prev[id]) {
          setActiveNodeId(id);
          setAutoRotate(false);
          setPulseEffect(Object.fromEntries(getRelatedItems(id).map((relId) => [relId, true])));
          centerViewOnNode(id);
        } else {
          setActiveNodeId(null);
          setAutoRotate(true);
          setPulseEffect({});
        }

        return newState;
      });
    },
    [centerViewOnNode, getRelatedItems],
  );

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = isCompact ? 126 : 200;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);

    return {
      angle,
      opacity: Math.max(0.45, Math.min(1, 0.45 + 0.55 * ((1 + Math.sin(radian)) / 2))),
      x,
      y,
      zIndex: Math.round(100 + 50 * Math.cos(radian)),
    };
  };

  const isRelatedToActive = (itemId: number) => {
    if (!activeNodeId) {
      return false;
    }

    return getRelatedItems(activeNodeId).includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed":
        return "border-emerald-300/60 bg-emerald-300/12 text-emerald-100";
      case "in-progress":
        return "border-cyan-300/70 bg-cyan-300/14 text-cyan-100";
      case "pending":
        return "border-white/30 bg-white/8 text-white/70";
    }
  };

  const handleContainerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === containerRef.current || event.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  return (
    <div className="radial-timeline" onClick={handleContainerClick} ref={containerRef}>
      <div className="radial-timeline__intro">
        <p><span /> Operating Model</p>
        <h3>How ideas become shipped systems</h3>
        <small>Click a node to see the connected business path.</small>
      </div>

      <div className="radial-timeline__stage">
        <div className="radial-timeline__orbit" ref={orbitRef}>
          <div className="radial-timeline__center">
            <div />
          </div>

          <div className="radial-timeline__ring radial-timeline__ring--outer" />
          <div className="radial-timeline__ring radial-timeline__ring--inner" />

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            return (
              <div
                className="radial-node"
                key={item.id}
                onClick={(event) => {
                  event.stopPropagation();
                  toggleItem(item.id);
                }}
                ref={(element) => {
                  nodeRefs.current[item.id] = element;
                }}
                style={{
                  opacity: isExpanded ? 1 : position.opacity,
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  zIndex: isExpanded ? 200 : position.zIndex,
                }}
              >
                <div
                  className="radial-node__energy"
                  data-pulsing={isPulsing}
                  style={{
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    width: `${item.energy * 0.5 + 40}px`,
                  }}
                />
                <button
                  aria-expanded={isExpanded}
                  className="radial-node__button"
                  data-expanded={isExpanded}
                  data-related={isRelated}
                  type="button"
                >
                  <Icon size={16} />
                </button>
                <div className="radial-node__label" data-expanded={isExpanded}>
                  {item.title}
                </div>

                {isExpanded ? (
                  <Card className="radial-node__card">
                    <div className="radial-node__connector" />
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between gap-3">
                        <Badge className={getStatusStyles(item.status)}>
                          {item.status === "completed" ? "Complete" : item.status === "in-progress" ? "In Progress" : "Pending"}
                        </Badge>
                        <span className="text-xs font-mono text-white/45">{item.date}</span>
                      </div>
                      <CardTitle className="mt-2 text-sm text-white">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-white/78">
                      <p>{item.content}</p>
                      <div className="mt-4 border-t border-white/10 pt-3">
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span className="flex items-center"><Zap size={10} className="mr-1" />Business Energy</span>
                          <span className="font-mono">{item.energy}%</span>
                        </div>
                        <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                          <div className="h-full bg-gradient-to-r from-cyan-400 to-emerald-300" style={{ width: `${item.energy}%` }} />
                        </div>
                      </div>
                      {item.relatedIds.length > 0 ? (
                        <div className="mt-4 border-t border-white/10 pt-3">
                          <div className="mb-2 flex items-center">
                            <Link size={10} className="mr-1 text-white/70" />
                            <h4 className="text-xs font-bold uppercase tracking-wider text-white/70">Connected Nodes</h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find((node) => node.id === relatedId);
                              return (
                                <Button
                                  className="h-6 rounded-none border-white/20 bg-transparent px-2 py-0 text-xs text-white/80 hover:bg-white/10 hover:text-white"
                                  key={relatedId}
                                  onClick={(event) => {
                                    event.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                  size="sm"
                                  type="button"
                                  variant="outline"
                                >
                                  {relatedItem?.title}
                                  <ArrowRight size={8} className="ml-1 text-white/60" />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      ) : null}
                    </CardContent>
                  </Card>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
