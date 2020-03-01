Search.setIndex({docnames:["index","opentelemetry.context","opentelemetry.context.context","opentelemetry.ext.flask","opentelemetry.ext.http_requests","opentelemetry.ext.jaeger","opentelemetry.ext.jaeger.gen.jaeger.ttypes","opentelemetry.ext.opentracing_shim","opentelemetry.ext.pymongo","opentelemetry.ext.wsgi","opentelemetry.metrics","opentelemetry.sdk.context","opentelemetry.sdk.metrics","opentelemetry.sdk.metrics.export","opentelemetry.sdk.metrics.export.aggregate","opentelemetry.sdk.metrics.export.batcher","opentelemetry.sdk.trace","opentelemetry.sdk.trace.export","opentelemetry.sdk.util.instrumentation","opentelemetry.trace","opentelemetry.trace.sampling","opentelemetry.trace.status","opentelemetry.util.loader"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["index.rst","opentelemetry.context.rst","opentelemetry.context.context.rst","opentelemetry.ext.flask.rst","opentelemetry.ext.http_requests.rst","opentelemetry.ext.jaeger.rst","opentelemetry.ext.jaeger.gen.jaeger.ttypes.rst","opentelemetry.ext.opentracing_shim.rst","opentelemetry.ext.pymongo.rst","opentelemetry.ext.wsgi.rst","opentelemetry.metrics.rst","opentelemetry.sdk.context.rst","opentelemetry.sdk.metrics.rst","opentelemetry.sdk.metrics.export.rst","opentelemetry.sdk.metrics.export.aggregate.rst","opentelemetry.sdk.metrics.export.batcher.rst","opentelemetry.sdk.trace.rst","opentelemetry.sdk.trace.export.rst","opentelemetry.sdk.util.instrumentation.rst","opentelemetry.trace.rst","opentelemetry.trace.sampling.rst","opentelemetry.trace.status.rst","opentelemetry.util.loader.rst"],objects:{"opentelemetry.context":{attach:[1,1,1,""],context:[2,0,0,"-"],detach:[1,1,1,""],get_current:[1,1,1,""],get_value:[1,1,1,""],set_value:[1,1,1,""]},"opentelemetry.context.context":{Context:[2,2,1,""],RuntimeContext:[2,2,1,""]},"opentelemetry.context.context.RuntimeContext":{attach:[2,3,1,""],detach:[2,3,1,""],get_current:[2,3,1,""]},"opentelemetry.ext":{flask:[3,0,0,"-"],http_requests:[4,0,0,"-"],jaeger:[5,0,0,"-"],opentracing_shim:[7,0,0,"-"],pymongo:[8,0,0,"-"],wsgi:[9,0,0,"-"]},"opentelemetry.ext.flask":{instrument_app:[3,1,1,""]},"opentelemetry.ext.http_requests":{disable:[4,1,1,""],enable:[4,1,1,""]},"opentelemetry.ext.jaeger":{AgentClientUDP:[5,2,1,""],Collector:[5,2,1,""],JaegerSpanExporter:[5,2,1,""]},"opentelemetry.ext.jaeger.AgentClientUDP":{emit:[5,3,1,""]},"opentelemetry.ext.jaeger.Collector":{submit:[5,3,1,""]},"opentelemetry.ext.jaeger.JaegerSpanExporter":{"export":[5,3,1,""],agent_client:[5,3,1,""],collector:[5,3,1,""],shutdown:[5,3,1,""]},"opentelemetry.ext.jaeger.gen.jaeger":{ttypes:[6,0,0,"-"]},"opentelemetry.ext.jaeger.gen.jaeger.ttypes":{Batch:[6,2,1,""],BatchSubmitResponse:[6,2,1,""],Log:[6,2,1,""],Process:[6,2,1,""],Span:[6,2,1,""],SpanRef:[6,2,1,""],SpanRefType:[6,2,1,""],Tag:[6,2,1,""],TagType:[6,2,1,""]},"opentelemetry.ext.jaeger.gen.jaeger.ttypes.Batch":{read:[6,3,1,""],thrift_spec:[6,4,1,""],validate:[6,3,1,""],write:[6,3,1,""]},"opentelemetry.ext.jaeger.gen.jaeger.ttypes.BatchSubmitResponse":{read:[6,3,1,""],thrift_spec:[6,4,1,""],validate:[6,3,1,""],write:[6,3,1,""]},"opentelemetry.ext.jaeger.gen.jaeger.ttypes.Log":{read:[6,3,1,""],thrift_spec:[6,4,1,""],validate:[6,3,1,""],write:[6,3,1,""]},"opentelemetry.ext.jaeger.gen.jaeger.ttypes.Process":{read:[6,3,1,""],thrift_spec:[6,4,1,""],validate:[6,3,1,""],write:[6,3,1,""]},"opentelemetry.ext.jaeger.gen.jaeger.ttypes.Span":{read:[6,3,1,""],thrift_spec:[6,4,1,""],validate:[6,3,1,""],write:[6,3,1,""]},"opentelemetry.ext.jaeger.gen.jaeger.ttypes.SpanRef":{read:[6,3,1,""],thrift_spec:[6,4,1,""],validate:[6,3,1,""],write:[6,3,1,""]},"opentelemetry.ext.jaeger.gen.jaeger.ttypes.SpanRefType":{CHILD_OF:[6,4,1,""],FOLLOWS_FROM:[6,4,1,""]},"opentelemetry.ext.jaeger.gen.jaeger.ttypes.Tag":{read:[6,3,1,""],thrift_spec:[6,4,1,""],validate:[6,3,1,""],write:[6,3,1,""]},"opentelemetry.ext.jaeger.gen.jaeger.ttypes.TagType":{BINARY:[6,4,1,""],BOOL:[6,4,1,""],DOUBLE:[6,4,1,""],LONG:[6,4,1,""],STRING:[6,4,1,""]},"opentelemetry.ext.opentracing_shim":{ScopeManagerShim:[7,2,1,""],ScopeShim:[7,2,1,""],SpanContextShim:[7,2,1,""],SpanShim:[7,2,1,""],TracerShim:[7,2,1,""],create_tracer:[7,1,1,""]},"opentelemetry.ext.opentracing_shim.ScopeManagerShim":{activate:[7,3,1,""],active:[7,3,1,""],tracer:[7,3,1,""]},"opentelemetry.ext.opentracing_shim.ScopeShim":{close:[7,3,1,""],from_context_manager:[7,3,1,""]},"opentelemetry.ext.opentracing_shim.SpanContextShim":{baggage:[7,3,1,""],unwrap:[7,3,1,""]},"opentelemetry.ext.opentracing_shim.SpanShim":{finish:[7,3,1,""],get_baggage_item:[7,3,1,""],log:[7,3,1,""],log_event:[7,3,1,""],log_kv:[7,3,1,""],set_baggage_item:[7,3,1,""],set_operation_name:[7,3,1,""],set_tag:[7,3,1,""],unwrap:[7,3,1,""]},"opentelemetry.ext.opentracing_shim.TracerShim":{extract:[7,3,1,""],inject:[7,3,1,""],start_active_span:[7,3,1,""],start_span:[7,3,1,""],unwrap:[7,3,1,""]},"opentelemetry.ext.pymongo":{CommandTracer:[8,2,1,""],trace_integration:[8,1,1,""]},"opentelemetry.ext.pymongo.CommandTracer":{failed:[8,3,1,""],started:[8,3,1,""],succeeded:[8,3,1,""]},"opentelemetry.ext.wsgi":{OpenTelemetryMiddleware:[9,2,1,""],add_response_attributes:[9,1,1,""],collect_request_attributes:[9,1,1,""],get_default_span_name:[9,1,1,""],get_header_from_environ:[9,1,1,""],http_status_to_canonical_code:[9,1,1,""],setifnotnone:[9,1,1,""]},"opentelemetry.metrics":{Counter:[10,2,1,""],CounterHandle:[10,2,1,""],DefaultLabelSet:[10,2,1,""],DefaultMeter:[10,2,1,""],DefaultMeterProvider:[10,2,1,""],DefaultMetric:[10,2,1,""],DefaultMetricHandle:[10,2,1,""],Gauge:[10,2,1,""],GaugeHandle:[10,2,1,""],LabelSet:[10,2,1,""],Measure:[10,2,1,""],MeasureHandle:[10,2,1,""],Meter:[10,2,1,""],MeterProvider:[10,2,1,""],Metric:[10,2,1,""],get_meter:[10,1,1,""],meter_provider:[10,1,1,""],set_preferred_meter_provider_implementation:[10,1,1,""]},"opentelemetry.metrics.Counter":{add:[10,3,1,""],get_handle:[10,3,1,""]},"opentelemetry.metrics.CounterHandle":{add:[10,3,1,""]},"opentelemetry.metrics.DefaultMeter":{create_metric:[10,3,1,""],get_label_set:[10,3,1,""],record_batch:[10,3,1,""]},"opentelemetry.metrics.DefaultMeterProvider":{get_meter:[10,3,1,""]},"opentelemetry.metrics.DefaultMetric":{add:[10,3,1,""],get_handle:[10,3,1,""],record:[10,3,1,""],set:[10,3,1,""]},"opentelemetry.metrics.DefaultMetricHandle":{add:[10,3,1,""],record:[10,3,1,""],set:[10,3,1,""]},"opentelemetry.metrics.Gauge":{get_handle:[10,3,1,""],set:[10,3,1,""]},"opentelemetry.metrics.GaugeHandle":{set:[10,3,1,""]},"opentelemetry.metrics.Measure":{get_handle:[10,3,1,""],record:[10,3,1,""]},"opentelemetry.metrics.MeasureHandle":{record:[10,3,1,""]},"opentelemetry.metrics.Meter":{create_metric:[10,3,1,""],get_label_set:[10,3,1,""],record_batch:[10,3,1,""]},"opentelemetry.metrics.MeterProvider":{get_meter:[10,3,1,""]},"opentelemetry.metrics.Metric":{get_handle:[10,3,1,""]},"opentelemetry.sdk":{context:[11,0,0,"-"],metrics:[12,0,0,"-"],trace:[16,0,0,"-"]},"opentelemetry.sdk.metrics":{"export":[13,0,0,"-"],BaseHandle:[12,2,1,""],Counter:[12,2,1,""],CounterHandle:[12,2,1,""],Gauge:[12,2,1,""],GaugeHandle:[12,2,1,""],LabelSet:[12,2,1,""],Measure:[12,2,1,""],MeasureHandle:[12,2,1,""],Meter:[12,2,1,""],MeterProvider:[12,2,1,""],Metric:[12,2,1,""],Record:[12,2,1,""]},"opentelemetry.sdk.metrics.BaseHandle":{update:[12,3,1,""]},"opentelemetry.sdk.metrics.Counter":{HANDLE_TYPE:[12,4,1,""],UPDATE_FUNCTION:[12,3,1,""],add:[12,3,1,""]},"opentelemetry.sdk.metrics.CounterHandle":{add:[12,3,1,""]},"opentelemetry.sdk.metrics.Gauge":{HANDLE_TYPE:[12,4,1,""],UPDATE_FUNCTION:[12,3,1,""],set:[12,3,1,""]},"opentelemetry.sdk.metrics.GaugeHandle":{set:[12,3,1,""]},"opentelemetry.sdk.metrics.LabelSet":{labels:[12,3,1,""]},"opentelemetry.sdk.metrics.Measure":{HANDLE_TYPE:[12,4,1,""],UPDATE_FUNCTION:[12,3,1,""],record:[12,3,1,""]},"opentelemetry.sdk.metrics.MeasureHandle":{record:[12,3,1,""]},"opentelemetry.sdk.metrics.Meter":{collect:[12,3,1,""],create_metric:[12,3,1,""],get_label_set:[12,3,1,""],record_batch:[12,3,1,""]},"opentelemetry.sdk.metrics.MeterProvider":{get_meter:[12,3,1,""]},"opentelemetry.sdk.metrics.Metric":{HANDLE_TYPE:[12,4,1,""],UPDATE_FUNCTION:[12,3,1,""],get_handle:[12,3,1,""]},"opentelemetry.sdk.metrics.export":{ConsoleMetricsExporter:[13,2,1,""],MetricRecord:[13,2,1,""],MetricsExportResult:[13,2,1,""],MetricsExporter:[13,2,1,""],aggregate:[14,0,0,"-"],batcher:[15,0,0,"-"]},"opentelemetry.sdk.metrics.export.ConsoleMetricsExporter":{"export":[13,3,1,""]},"opentelemetry.sdk.metrics.export.MetricsExportResult":{FAILED_NOT_RETRYABLE:[13,4,1,""],FAILED_RETRYABLE:[13,4,1,""],SUCCESS:[13,4,1,""]},"opentelemetry.sdk.metrics.export.MetricsExporter":{"export":[13,3,1,""],shutdown:[13,3,1,""]},"opentelemetry.sdk.metrics.export.aggregate":{Aggregator:[14,2,1,""],CounterAggregator:[14,2,1,""],MinMaxSumCountAggregator:[14,2,1,""]},"opentelemetry.sdk.metrics.export.aggregate.Aggregator":{merge:[14,3,1,""],take_checkpoint:[14,3,1,""],update:[14,3,1,""]},"opentelemetry.sdk.metrics.export.aggregate.CounterAggregator":{merge:[14,3,1,""],take_checkpoint:[14,3,1,""],update:[14,3,1,""]},"opentelemetry.sdk.metrics.export.aggregate.MinMaxSumCountAggregator":{merge:[14,3,1,""],take_checkpoint:[14,3,1,""],update:[14,3,1,""]},"opentelemetry.sdk.metrics.export.batcher":{Batcher:[15,2,1,""],UngroupedBatcher:[15,2,1,""]},"opentelemetry.sdk.metrics.export.batcher.Batcher":{aggregator_for:[15,3,1,""],checkpoint_set:[15,3,1,""],finished_collection:[15,3,1,""],process:[15,3,1,""]},"opentelemetry.sdk.metrics.export.batcher.UngroupedBatcher":{process:[15,3,1,""]},"opentelemetry.sdk.trace":{"export":[17,0,0,"-"],MultiSpanProcessor:[16,2,1,""],Span:[16,2,1,""],SpanProcessor:[16,2,1,""],Tracer:[16,2,1,""],TracerProvider:[16,2,1,""],generate_span_id:[16,1,1,""],generate_trace_id:[16,1,1,""]},"opentelemetry.sdk.trace.MultiSpanProcessor":{add_span_processor:[16,3,1,""],on_end:[16,3,1,""],on_start:[16,3,1,""],shutdown:[16,3,1,""]},"opentelemetry.sdk.trace.Span":{add_event:[16,3,1,""],add_lazy_event:[16,3,1,""],empty_attributes:[16,4,1,""],empty_events:[16,4,1,""],empty_links:[16,4,1,""],end:[16,3,1,""],end_time:[16,3,1,""],get_context:[16,3,1,""],is_recording_events:[16,3,1,""],set_attribute:[16,3,1,""],set_status:[16,3,1,""],start:[16,3,1,""],start_time:[16,3,1,""],update_name:[16,3,1,""]},"opentelemetry.sdk.trace.SpanProcessor":{force_flush:[16,3,1,""],on_end:[16,3,1,""],on_start:[16,3,1,""],shutdown:[16,3,1,""]},"opentelemetry.sdk.trace.Tracer":{get_current_span:[16,3,1,""],start_as_current_span:[16,3,1,""],start_span:[16,3,1,""],use_span:[16,3,1,""]},"opentelemetry.sdk.trace.TracerProvider":{add_span_processor:[16,3,1,""],get_current_span:[16,3,1,""],get_tracer:[16,3,1,""],shutdown:[16,3,1,""]},"opentelemetry.sdk.trace.export":{BatchExportSpanProcessor:[17,2,1,""],ConsoleSpanExporter:[17,2,1,""],SimpleExportSpanProcessor:[17,2,1,""],SpanExportResult:[17,2,1,""],SpanExporter:[17,2,1,""]},"opentelemetry.sdk.trace.export.BatchExportSpanProcessor":{"export":[17,3,1,""],force_flush:[17,3,1,""],on_end:[17,3,1,""],on_start:[17,3,1,""],shutdown:[17,3,1,""],worker:[17,3,1,""]},"opentelemetry.sdk.trace.export.ConsoleSpanExporter":{"export":[17,3,1,""]},"opentelemetry.sdk.trace.export.SimpleExportSpanProcessor":{force_flush:[17,3,1,""],on_end:[17,3,1,""],on_start:[17,3,1,""],shutdown:[17,3,1,""]},"opentelemetry.sdk.trace.export.SpanExportResult":{FAILED_NOT_RETRYABLE:[17,4,1,""],FAILED_RETRYABLE:[17,4,1,""],SUCCESS:[17,4,1,""]},"opentelemetry.sdk.trace.export.SpanExporter":{"export":[17,3,1,""],shutdown:[17,3,1,""]},"opentelemetry.sdk.util":{instrumentation:[18,0,0,"-"]},"opentelemetry.sdk.util.instrumentation":{InstrumentationInfo:[18,2,1,""]},"opentelemetry.sdk.util.instrumentation.InstrumentationInfo":{name:[18,3,1,""],version:[18,3,1,""]},"opentelemetry.trace":{DefaultSpan:[19,2,1,""],DefaultTracer:[19,2,1,""],DefaultTracerProvider:[19,2,1,""],Event:[19,2,1,""],Link:[19,2,1,""],Span:[19,2,1,""],SpanContext:[19,2,1,""],SpanKind:[19,2,1,""],TraceFlags:[19,2,1,""],TraceState:[19,2,1,""],Tracer:[19,2,1,""],TracerProvider:[19,2,1,""],format_span_id:[19,1,1,""],format_trace_id:[19,1,1,""],get_tracer:[19,1,1,""],sampling:[20,0,0,"-"],set_preferred_tracer_provider_implementation:[19,1,1,""],status:[21,0,0,"-"],tracer_provider:[19,1,1,""]},"opentelemetry.trace.DefaultSpan":{add_event:[19,3,1,""],add_lazy_event:[19,3,1,""],end:[19,3,1,""],get_context:[19,3,1,""],is_recording_events:[19,3,1,""],set_attribute:[19,3,1,""],set_status:[19,3,1,""],update_name:[19,3,1,""]},"opentelemetry.trace.DefaultTracer":{get_current_span:[19,3,1,""],start_as_current_span:[19,3,1,""],start_span:[19,3,1,""],use_span:[19,3,1,""]},"opentelemetry.trace.DefaultTracerProvider":{get_tracer:[19,3,1,""]},"opentelemetry.trace.Event":{attributes:[19,3,1,""],name:[19,3,1,""],timestamp:[19,3,1,""]},"opentelemetry.trace.Link":{attributes:[19,3,1,""],context:[19,3,1,""]},"opentelemetry.trace.Span":{add_event:[19,3,1,""],add_lazy_event:[19,3,1,""],end:[19,3,1,""],get_context:[19,3,1,""],is_recording_events:[19,3,1,""],set_attribute:[19,3,1,""],set_status:[19,3,1,""],update_name:[19,3,1,""]},"opentelemetry.trace.SpanContext":{is_valid:[19,3,1,""]},"opentelemetry.trace.SpanKind":{CLIENT:[19,4,1,""],CONSUMER:[19,4,1,""],INTERNAL:[19,4,1,""],PRODUCER:[19,4,1,""],SERVER:[19,4,1,""]},"opentelemetry.trace.TraceFlags":{DEFAULT:[19,4,1,""],SAMPLED:[19,4,1,""],get_default:[19,3,1,""],sampled:[19,3,1,""]},"opentelemetry.trace.TraceState":{get_default:[19,3,1,""]},"opentelemetry.trace.Tracer":{CURRENT_SPAN:[19,4,1,""],get_current_span:[19,3,1,""],start_as_current_span:[19,3,1,""],start_span:[19,3,1,""],use_span:[19,3,1,""]},"opentelemetry.trace.TracerProvider":{get_tracer:[19,3,1,""]},"opentelemetry.trace.sampling":{Decision:[20,2,1,""],ProbabilitySampler:[20,2,1,""],Sampler:[20,2,1,""],StaticSampler:[20,2,1,""]},"opentelemetry.trace.sampling.ProbabilitySampler":{TRACE_ID_LIMIT:[20,4,1,""],bound:[20,3,1,""],get_bound_for_rate:[20,3,1,""],rate:[20,3,1,""],should_sample:[20,3,1,""]},"opentelemetry.trace.sampling.Sampler":{should_sample:[20,3,1,""]},"opentelemetry.trace.sampling.StaticSampler":{should_sample:[20,3,1,""]},"opentelemetry.trace.status":{Status:[21,2,1,""],StatusCanonicalCode:[21,2,1,""]},"opentelemetry.trace.status.Status":{canonical_code:[21,3,1,""],description:[21,3,1,""],is_ok:[21,3,1,""]},"opentelemetry.trace.status.StatusCanonicalCode":{ABORTED:[21,4,1,""],ALREADY_EXISTS:[21,4,1,""],CANCELLED:[21,4,1,""],DATA_LOSS:[21,4,1,""],DEADLINE_EXCEEDED:[21,4,1,""],FAILED_PRECONDITION:[21,4,1,""],INTERNAL:[21,4,1,""],INVALID_ARGUMENT:[21,4,1,""],NOT_FOUND:[21,4,1,""],OK:[21,4,1,""],OUT_OF_RANGE:[21,4,1,""],PERMISSION_DENIED:[21,4,1,""],RESOURCE_EXHAUSTED:[21,4,1,""],UNAUTHENTICATED:[21,4,1,""],UNAVAILABLE:[21,4,1,""],UNIMPLEMENTED:[21,4,1,""],UNKNOWN:[21,4,1,""]},"opentelemetry.util":{loader:[22,0,0,"-"]},"opentelemetry.util.loader":{set_preferred_default_implementation:[22,1,1,""]},opentelemetry:{context:[1,0,0,"-"],metrics:[10,0,0,"-"],trace:[19,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute"},terms:{"0x01":19,"abstract":[2,10,14,15,19,20],"case":[7,10],"class":[2,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21],"default":[7,10,16,19,22],"enum":[13,17,19,21],"export":[5,10,12,16],"final":19,"float":[7,10,12,16,19,20],"function":[1,3,7,10,12,16,19,22],"import":[7,19,22],"instanceof":22,"int":[7,12,16,17,19,20],"long":[6,21],"new":[1,5,7,10,14,16,19],"null":16,"return":[1,2,5,7,9,10,12,13,15,16,17,18,19,20,21,22],"static":16,"throw":[16,17],"transient":21,"true":[7,9,10,12,16,17,19,21,22],"try":19,"while":7,For:[7,10,15,16,19,21],Its:7,Not:[7,21],That:22,The:[1,2,4,5,7,8,9,10,12,13,15,16,17,19,21,22],There:[7,21],Use:21,Used:[7,10],Will:12,__enter__:7,__exit__:7,__name__:[7,10,12,16,19],_implement:22,_io:17,abc:[2,10,14,15,19,20],abl:7,abort:21,about:[7,18],abov:[7,21,22],abstractcontextmanag:7,accept:[7,15],access:[1,19,21],across:19,act:10,activ:[7,16,19],actual:7,add:[9,10,12,16,19,20],add_ev:[16,19],add_lazy_ev:[16,19],add_response_attribut:9,add_span_processor:16,added:16,addit:[7,19],address:21,affect:7,aforement:7,after:[10,19],agenc:5,agent:5,agent_cli:5,agent_host_nam:5,agent_port:5,agentclientudp:5,aggreg:[10,12,13,15],aggregator_for:15,agreg:14,algorithm:22,alia:12,all:[4,10,12,15,16,17,19],allow:[4,7,8,10,16,19],allow_redirect:9,alon:19,alreadi:[7,10,19,21],already_exist:21,also:[4,12,19,21],altern:22,alwai:[7,20,21,22],amount:[16,17],ani:[7,9,10,16,19,22],annot:[5,9,19],anoth:21,api:[0,1,5,7,8,10,19,21,22],api_typ:22,appli:[20,21],applic:[7,9,16,19],arbitrari:10,argument:[1,7,9,16,19,21,22],arithmet:7,ascii:19,ask:21,assign:19,associ:[1,7,10,13,19],atexit:16,atom:10,attach:[1,2,19],attempt:[21,22],attribut:[7,9,16,19,20],auth:5,authent:[5,21],automat:[7,19],avail:[2,10,19],back:7,backoff:21,baggag:7,base:[2,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21],base_context:1,basehandl:12,basic:5,batch:[5,6,10,13,15,17],batcher:12,batchexportspanprocessor:17,batchsubmitrespons:6,becaus:[7,10,21],becom:19,been:[16,17,19,21],befor:[1,7,21],behav:7,behavior:[12,16,19],behind:7,being:10,belong:[12,19,21],best:10,between:[7,19,21],binari:[5,6,7],bit:[16,21],bitmask:19,block:[16,17,19],bool:[6,7,10,12,16,17,19,20,21],both:7,bound:20,boundari:19,boundeddict:16,boundedlist:16,broken:21,broker:19,bug:7,calcul:[9,10],call:[1,3,4,5,7,10,13,16,17,19,21,22],callabl:[9,10,19],callback:[10,19,22],caller:[1,19,21],can:[1,2,7,9,13,16,17,19,21],cancel:21,cannot:10,canon:21,canonic:10,canonical_cod:21,carrier:7,caus:[7,21],certain:15,chain:7,chang:[19,21],charact:19,check:21,checkpoint:[10,12,13,14],checkpoint_set:15,child:[7,16,19],child_of:[6,7],children:19,clarif:10,classifi:5,classmethod:[7,19,20],client:[5,19,21],close:[7,19],code:[7,9,21,22],codebas:7,collect:[5,9,10,12],collect_request_attribut:9,collector:5,collector_endpoint:5,collector_host_nam:5,collector_port:5,com:[8,19],combin:14,command:8,commandfailedev:8,commandlisten:8,commandstartedev:8,commandsucceededev:8,commandtrac:8,common:12,commun:7,compar:7,complet:21,comput:[7,10,12],concern:1,concret:19,concurr:21,condit:21,configur:[16,17],conform:[9,19],consist:[7,19],consol:[13,17],consolemetricsexport:13,consolespanexport:17,construct:[7,10],constructor:16,consum:19,contain:[1,5,7,12,13],context:[0,7,10,16,19],contextlib:7,continu:12,control:[7,19,21],conveni:[10,19],convent:10,convert:[7,21],copi:[1,16,19],correct:[7,21],correctli:7,correspond:[7,10],corrupt:21,cost:10,could:21,count:14,counter:[10,12,14],counteraggreg:14,counterhandl:[10,12],creat:[5,7,10,12,15,16,19,20,21,22],create_metr:[10,12],create_trac:7,creation:[9,19],credenti:21,critic:19,cross:1,current:[1,2,7,8,10,12,13,14,15,16,19,21],current_span:19,cut:1,data:[5,7,12,13,15,17,21],data_loss:21,deactiv:7,deadlin:21,deadline_exceed:21,decid:21,decim:7,decis:20,declar:10,def:22,defaultlabelset:10,defaultmet:10,defaultmeterprovid:10,defaultmetr:10,defaultmetrichandl:10,defaultspan:[16,19],defaulttrac:19,defaulttracerprovid:19,defer:10,defin:[7,10,19,22],definit:7,delai:21,delet:21,delta:[10,12],deni:21,depend:[7,15,16,19],describ:[0,10,12,19,21],descript:[10,12,21],detach:[1,2,19],detail:[7,10,19,22],detect:21,determin:7,develop:21,diagnost:[13,17],dic:9,dict:[2,7,10,12,16,19],dictionari:[7,9,10,12],differ:[2,10,12,16,19,21],direct:[10,19],directli:[7,16,17],directori:21,disabl:4,distribut:[19,22],django:9,do_work:19,doc:22,document:[0,7],doe:[7,21,22],doesn:[7,19],doing:[10,12,16,19],done:21,doubl:6,down:[5,13,16,17],due:[7,21],durat:6,dynam:10,each:[12,19],easi:7,easili:21,effect:10,effort:7,either:[10,19],els:9,emit:5,empti:[9,21],empty_attribut:16,empty_ev:16,empty_link:16,enabl:[4,10,12,21],encod:[12,17],end:[7,16,17,19,21],end_on_exit:[16,19],end_tim:[16,19],endpoint:5,enough:21,entir:21,entiti:21,entri:1,entry_point:2,enumer:[13,17,19],environ:[2,9,22],epoch:7,equival:19,error:21,etc:[4,21],even:[16,19,21],event:[7,8,16,19],everi:[7,10],exactli:7,exampl:[7,10,19,21],exceed:[16,17],except:[16,17,19],execut:[1,19,21],exhaust:21,exist:[9,21],exit:[16,19],expect:21,experiment:19,expir:21,explicit:[7,10,19],explicitli:21,expos:7,express:[7,10],ext:[0,10,12,16,19],extract:7,fact:7,factori:[10,19,22],fail:[8,21,22],failed_not_retry:[13,17],failed_precondit:21,failed_retry:[13,17],failur:21,fair:21,fals:[6,7,10,12,16,17,19,20,21],fast:22,featur:21,field:[6,19],file:21,filter:15,find:[10,22],finish:[7,16,19,21],finish_on_clos:7,finish_tim:7,finished_collect:15,first:[16,19,22],fix:21,flag:[6,19,22],flask:[0,9],follow:[7,21,22],follows_from:6,force_flush:[16,17],format:[5,7,13,17],format_span_id:19,format_trace_id:19,formatt:17,former:7,forth:7,forward:[9,16],found:[7,19,21],framework:9,free:[16,19],from:[1,7,9,10,12,15,19,21],from_context_manag:7,further:[16,19],futur:7,gaug:[10,12],gaugehandl:[10,12],gen:5,gener:[2,7,9,16,19,21],generate_span_id:16,generate_trace_id:16,get:[4,7,10,15,16,19],get_baggage_item:7,get_bound_for_r:20,get_context:[16,19],get_curr:[1,2],get_current_span:[16,19],get_default:19,get_default_span_nam:9,get_distribut:[10,12,16,19],get_handl:[10,12],get_header_from_environ:9,get_label_set:[10,12],get_met:[10,12,18],get_opentelemetry_implement:22,get_trac:[7,16,18,19],get_valu:1,getdatafromdb:7,getter:[19,22],github:19,given:[10,12,16,19],global:[10,19,22],gradual:21,guidelin:21,had:1,handl:[7,8,10,12,16,19],handle_typ:12,hardwar:7,has:[12,16,19,21,22],have:[7,10,16,17,19,21],header:9,header_nam:9,higher:21,hold:[10,12,14],hood:7,hook:16,host:5,host_nam:5,how:19,howev:7,html:8,http:[4,5,7,8,9,19],http_request:[0,10,12,16,19],http_status_to_canonical_cod:9,http_transport:5,human:10,idempot:21,identifi:[7,16,19,21],ignor:[7,16,19],ignore_active_span:7,ignore_environ:22,immediatelli:22,immut:[10,16,18,19],implement:[2,5,7,10,12,13,16,17,19,21,22],implementation_factori:22,implementor:21,impli:21,implicit:19,imprecis:7,includ:[4,19],incom:9,increas:10,index:0,indic:[10,12,19,21,22],info:19,inform:[7,12,15,16,18,19,21],inherit:10,initi:7,inject:7,input:[1,10],instanc:[7,10,12,16,19,22],instead:[10,12,16,19,21],instrument:[4,7,10,12,16,19],instrument_app:3,instrumentation_info:[12,16],instrumentationinfo:[12,18],instrumenting_library_nam:[10,12,16,19],instrumenting_library_vers:[10,12,16,19],instrumenting_module_nam:[10,12,16,19],integ:7,integr:[0,8],interfac:[2,10,13,16,17],intern:[7,16,19,21,22],interpret:22,interv:10,introduc:19,invalid:[19,21],invalid_argu:21,invari:21,invoc:16,invok:[7,9,16,22],involv:7,iprot:6,is_ok:21,is_recording_ev:[16,19],is_valid:19,isn:[7,10,19],issu:[7,21],iter:[16,19,21],its:[7,13,17,19],jaeger:0,jaegerspanexport:5,just:[10,12,16,17,19,21],keep:[7,14,15],kei:[1,6,7,9,10,12,15,16,19],key_valu:7,kind:[10,16,19],known:[10,12,21],kwarg:7,label:[10,12,13],label_kei:[10,12],label_set:[10,12,13],labelset:[10,12],lambda:7,languag:7,larg:7,last:22,latenc:19,later:7,latter:7,leav:19,less:7,level:21,librari:[4,7,8,10,12,16,18,19],lifecycl:19,lifetim:[10,12,19],like:[7,16,19,21,22],limit:7,link:[16,19,20],list:[5,7,9,15,16,17,19],listen:8,load:[10,19,22],loader:[0,10,19],local:1,localhost:5,log:[5,6,7],log_ev:7,log_kv:7,logic:15,look:21,loss:21,made:[2,4,8,22],mai:[7,10,12,16,19,21,22],mainli:[7,22],make:[3,7,19],malform:21,manag:[7,19],manipul:19,manual:19,map:[12,15,20],match:10,max:14,max_export_batch_s:17,max_packet_s:5,max_queue_s:17,maximum:[5,16,17],maxlen:16,mean:[18,21,22],meaning:19,measur:[10,12,14],measurehandl:[10,12],mechan:[2,19],merg:14,messag:19,metadata:19,meter:[10,12,15],meter_provid:10,meterprovid:[10,12,18],method:[7,8,16,17,19],metric:[0,18],metric_kind:10,metric_record:13,metric_typ:[10,12,15],metrichandl:10,metricrecord:[13,15],metricsexport:13,metricsexportresult:13,metrict:[10,12],microsecond:7,middlewar:9,might:10,migrat:7,min:14,minim:7,minmaxsumcountaggreg:14,mock:7,mode:17,modifi:[16,19,21],modul:[0,12,16,18],mongodb:8,monitor:8,more:[7,19,21,22],most:[17,21],multipl:[3,10],multispanprocessor:16,must:[3,7,17,19,21],my_factory_for_t:22,name:[5,7,9,10,12,16,17,18,19,20,21,22],nanosecond:7,necessari:7,necessarili:19,need:[7,19],newli:[19,20],non:21,none:[1,2,5,6,7,8,10,12,13,15,16,17,19,20,21,22],nonempti:22,not_found:21,note:[4,7,19,21,22],notion:7,number:7,object:[1,2,3,5,6,7,9,10,12,13,16,17,18,19,20,21,22],observ:[7,10],off:15,offer:10,offset:21,omit:[7,16,19],on_end:[16,17],on_start:[16,17],onc:10,one:[7,10,19],onli:[4,7,10,16,19],opaqu:10,open:19,opentelemetry_python_implementation_:22,opentelemetry_python_implementation_default:22,opentelemetry_python_implementation_tracerprovid:22,opentelemetrymiddlewar:9,opentrac:7,opentracing_shim:0,oper:[7,10,12,16,19,21],operation_nam:7,operationnam:6,oprot:6,optim:10,option:[1,7,10,12,16,19,20,21,22],order:16,ordinari:7,origin:12,otel_context:7,otel_trac:7,otel_tracer_provid:7,other:[4,7,14,16,19,21,22],otherwis:[16,17,19,21,22],our:7,out:[17,21],out_of_rang:21,over:[10,12,19],overlap:21,overrid:[16,19,22],own:[13,17],packag:0,packet:5,page:0,pair:[10,19],paramet:[1,2,5,7,9,10,12,13,16,17,19,20,21],parent:[7,16,19],parent_context:20,parentspanid:6,part:7,pass:[3,7,9,15,16,17,19],password:5,past:21,patch:4,path:19,payload:7,pep3333:9,pep:9,per:[10,21],perform:[7,15],perhap:21,period:[10,12],permiss:21,permission_deni:21,permit:10,perspect:7,pkg_resourc:[10,12,16,19],placehold:19,pleas:7,point:7,popular:4,port:5,portion:7,possibl:7,post:15,potenti:10,pre:[10,15,21],preaggreg:10,predefin:10,present:7,previou:[1,2],previous:[16,19],previousi:19,print:[7,13,17],printabl:19,probabilitysampl:20,problem:[7,21],problemat:21,process:[6,7,10,12,15,19],processhttprequest:7,processor:[16,17],produc:19,program:[1,7],propag:[2,19],properti:[5,7,12,16,18,19,20,21],protocol:5,provid:[1,2,7,9,10,16,19],pull:19,purpos:[7,13,17],push:17,pymongo:0,python:[2,7,8,22],queri:[5,22],quota:21,rais:[16,19,21],random:16,rang:21,rate:20,rather:7,raw:10,read:[6,21],readabl:10,readi:15,real:7,reason:7,receiv:[15,16,19,21],recommend:21,record:[1,10,12,13,15,16,17,19],record_batch:[10,12],record_tupl:[10,12],reduc:10,refer:[2,6,7],reftyp:6,regardless:[7,21],regist:[16,17],regular:7,reject:21,relat:[7,19],relationship:19,relev:19,remot:[16,19],remov:7,repeat:10,repeatedli:10,replac:19,report:10,repres:[7,10,12,16,19,21],represent:7,request:[4,7,9,10,12,16,19,21],requir:[5,7,10,19,21,22],reserv:21,reset:[1,2,15],resourc:[16,21],resource_exhaust:21,respons:[9,12,14,15,19,21],response_head:9,restart:21,restor:1,restrict:19,result:[5,7,13,17,21],retri:21,retriev:[1,7,9],rewrit:7,rmdir:21,rollout:21,root:[7,16,19],rtype:16,runtimecontext:[1,2],safe:21,said:19,same:[3,7,10,12,16,19,20,22],sampl:[16,19],sampler:[16,20],satisfi:21,scenario:10,scene:7,schedule_delay_milli:17,scope:7,scope_manager_shim:7,scope_shim:7,scopemanag:7,scopemanagershim:7,scopeshim:7,sdk:[0,5,7,22],search:[0,22],second:7,section:7,see:[7,10,12,16,18,19,21,22],seek:21,select:2,send:19,sent:15,sequenc:[10,13,15,16,17,19,20,21],serializ:[16,19],seriou:21,server:[5,19,21],servic:[5,7,13,17,19,21],service_nam:5,servicenam:6,session:4,set:[1,2,7,10,12,13,16,19,21,22],set_attribut:[16,19],set_baggage_item:7,set_operation_nam:7,set_preferred_:22,set_preferred_default_implement:22,set_preferred_meter_provider_implement:10,set_preferred_tracer_provider_implement:[7,19,22],set_statu:[16,19],set_status_on_except:[16,19],set_tag:7,set_valu:1,setifnotnon:9,shim:7,ship:22,should:[7,10,12,16,17,19,20,21,22],should_sampl:20,shut:[5,13,16,17],shutdown:[5,13,16,17],shutdown_on_exit:16,signatur:22,similar:7,simpl:17,simpleexportspanprocessor:17,sinc:[7,21],singl:[9,10,12,16,19],size:[5,21],skip:22,sleep:7,slight:7,snapshot:[14,15],some:[7,19,21],sourc:[1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22],space:21,span:[5,6,7,9,16,17,19,20,21],span_cm:7,span_context:7,span_export:17,span_id:[19,20],span_processor:16,spancontext:[7,16,19],spancontextshim:7,spanexport:[5,17],spanexportresult:17,spanid:6,spankind:[16,19],spanprocessor:[16,17],spanref:6,spanreftyp:6,spanshim:7,spec:[10,19],special:10,specif:[12,19,21],specifi:[1,7,10,19,21],start:[7,8,9,16,17,19],start_active_span:7,start_as_current_span:[16,19],start_respons:9,start_response_statu:9,start_span:[7,16,19],start_tim:[7,16,19],starttim:6,stat:10,state:[1,7,10,12,15,16,19,21],stateless:15,staticsampl:[16,20],statist:10,statu:[16,19],statuscanonicalcod:21,stdout:[13,17],stem:7,step:22,stop:19,store:[7,14,15],str:[1,7,9,10,12,16,17,18,19,20,21],string:[6,9,10,12,16,19],submit:5,succeed:8,success:[13,17,21],successfulli:21,sum:[10,14],support:[7,10,19,21],synchron:[16,17],sys:22,system:[19,21],tag:[6,7],tagtyp:6,take:[1,14],take_checkpoint:14,telemetri:[5,13,17,19],tell:7,term:7,terminolog:10,test:[7,21],testspan:7,text:19,textiowrapp:17,than:7,thei:[16,19,21],them:[15,17],therefor:[7,16,17],thi:[0,3,4,7,9,10,12,13,15,16,17,19,21],those:[21,22],though:7,thread:[16,17],thrift:5,thrift_spec:6,thrift_url:5,through:[2,4,5,9,10,21],throughout:19,thttpclient:5,time:[3,7,9,16,17,19],timeout:[16,17],timeout_milli:[16,17],timestamp:[6,7,16,19],todo:[7,16],token:[1,2],too:7,trace:[0,3,4,5,7,8,18,22],trace_config:16,trace_flag:19,trace_id:[19,20],trace_id_limit:20,trace_integr:8,trace_st:19,traceflag:19,traceidhigh:6,traceidlow:6,tracepar:19,tracer:[7,8,16,17,19],tracer_provid:[4,19,22],tracerprovid:[7,16,18,19,22],tracershim:7,tracest:19,track:[9,12,15],transact:21,transpar:7,transport:5,tri:22,ttype:5,tupl:[5,10],two:[7,14,16,19,22],type:[1,2,7,9,10,12,13,15,16,17,18,19,20,21,22],typic:21,udp:5,unauthent:21,unavail:21,uncaught:19,undefin:[16,19],under:7,underli:21,undocu:21,ungroupedbatch:15,unimpl:[19,21],union:[16,19,20],unit:[1,10,12],unknown:[19,21],unless:21,unlik:[7,19,21],unrecover:21,unspecifi:10,until:21,unwrap:7,updat:[1,7,10,12,14,15,16,19],update_funct:12,update_nam:[16,19],upon:[10,12,14,16,19],upstream:19,url:5,usabl:10,usag:7,use:[7,10,12,16,19,21,22],use_span:[7,16,19],used:[1,2,7,9,10,12,13,15,16,17,19,21,22],useful:10,user:[5,7,16,21],usernam:5,uses:7,using:[7,8,9,10,16,17,19,21],usual:[10,12,16,19,22],utf8:6,utf:17,util:[0,10,12,16,19],valid:[6,19,21],valu:[1,2,7,9,10,12,13,14,15,16,19,21,22],value_typ:[10,12],valuet:[10,12],variabl:[2,22],variou:10,vbinari:6,vbool:6,vdoubl:6,vendor:19,version:[7,10,12,16,18,19],via:[2,7,16,19],vlong:6,vstr:6,vtype:6,w3c:19,wai:7,wait:[16,17],wall:[16,19],want:[13,17],welcom:0,well:[7,10,13],were:[7,12,16],wether:19,when:[5,7,10,13,15,16,17,19,21,22],where:10,wherea:7,whether:[7,10,12,16,19,20],which:[1,7,10,12,16,19,21,22],whitelist:21,who:21,within:[19,21],without:[7,19],won:19,work:[4,7],worker:17,wrap:7,wrapper:[2,7,10,19],write:[6,21],wsgi:0,yet:[7,10,16,17,19],yield:[7,19],you:[3,19],your:19},titles:["OpenTelemetry","opentelemetry.context package","opentelemetry.context.base_context module","opentelemetry.ext.flask package","opentelemetry.ext.http_requests package","opentelemetry.ext.jaeger package","opentelemetry.ext.jaeger.gen.jaeger.ttypes","opentelemetry.ext.opentracing_shim package","opentelemetry.ext.pymongo package","opentelemetry.ext.wsgi package","opentelemetry.metrics package","opentelemetry.sdk.context","opentelemetry.sdk.metrics package","opentelemetry.sdk.metrics.export","opentelemetry.sdk.metrics.export.aggregate","opentelemetry.sdk.metrics.export.batcher","opentelemetry.sdk.trace package","opentelemetry.sdk.trace.export","opentelemetry.sdk.util.instrumentation","opentelemetry.trace package","opentelemetry.trace.sampling","opentelemetry.trace.status","opentelemetry.util.loader module"],titleterms:{"export":[13,14,15,17],aggreg:14,base_context:2,batcher:15,content:[1,3,4,5,6,7,8,9,10,19],context:[1,2,11],ext:[3,4,5,6,7,8,9],flask:3,gen:6,http_request:4,indic:0,instrument:18,jaeger:[5,6],loader:22,metric:[10,12,13,14,15],modul:[1,2,3,4,5,6,7,8,9,10,19,22],opentelemetri:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],opentracing_shim:7,packag:[1,3,4,5,7,8,9,10,12,16,19],pymongo:8,sampl:20,sdk:[11,12,13,14,15,16,17,18],statu:21,submodul:[1,5,12,16,19],tabl:0,trace:[16,17,19,20,21],ttype:6,util:[18,22],wsgi:9}})